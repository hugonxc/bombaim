import os
import json
import tempfile
from google.cloud import storage
from flask import redirect
from flask import Flask, flash, request, redirect, url_for, send_file, jsonify

from mma.MMA import gbl
from mma.MMA import auto
from mma.MMA import midi
from mma.MMA import tempo
from mma.MMA import parse
from mma.MMA import paths
from mma.MMA import grooves
from mma.MMA import userGroove
from mma.MMA.auto import loadDB


headers = {
    'Access-Control-Allow-Origin': '*'
}

storage_client = storage.Client()

ALLOWED_EXTENSIONS = {'mma'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def upload_file(request):
    if request.method == 'POST':
        # Check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        f = request.files['file']
        # If user does not select file, browser also
        # submit an empty part without filename
        if f.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if f and allowed_file(f.filename):
            with tempfile.NamedTemporaryFile(mode="w", suffix=".mma", delete=False) as upload_file:
                upload_file.write(f.read().decode("utf-8"))
            upload_file.close()

            return upload_file, f.filename



def create_groove(request):
    f, filename = upload_file(request)
    if f:
        groove_info = save_groove(f, filename)
        return (jsonify(**groove_info), 200, headers)

def save_groove(f, filename):
    bucket = storage_client.get_bucket("mma-bombaim")

    new_groove = bucket.blob("lib/bombaim/"+ filename)
    
    new_groove.upload_from_string(open(f.name).read())

    return {
        "name": filename,
        "status": "available"
    }
def update_grooves(event, context):
    # Read and copy files from mma storage #   
    mma_bucket = storage_client.get_bucket("mma-bombaim")
    blobs = mma_bucket.list_blobs()
    
    for blob in blobs:
        filename = "/tmp/mma/"+str(blob.name)
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        blob.download_to_filename(filename)

    # Run MMA update groves list #
    # Clear global variables and change MMAdir
    gbl.__init__()
    gbl.MMAdir = "/tmp/mma/"
    # Set paths for the libs
    paths.init()

    gbl.makeGrvDefs = 1

    try:
        auto.libUpdate()
    except SystemExit:
        print("ignoring SystemExit", flush=True)

    # Needed import for global variable libDirs after paths.init() method ran
    from mma.MMA.paths import libDirs

    # Get grooves from MMA update #
    grooves = {}
    for lib in libDirs:
        g = loadDB(lib)
        if g:
            for g_path in g:
                name = g_path.split("/")[-1].split(".")[0]
                gs = g[g_path]

                if name in grooves:
                    og = grooves[name]
                    gs = og + gs

                grooves.update({name: gs})
    
    # Update file at storage #
    groove_bucket = storage_client.get_bucket("grooves-bombaim")
    groove_blob = groove_bucket.blob('grooves/list_grooves.json')    
    groove_blob.upload_from_string(json.dumps(grooves))    
    groove_blob.make_public()
