import os
import json
import tempfile
from google.cloud import storage
from flask_cors import CORS
from flask import Flask, flash, redirect, jsonify, send_file

from mma.MMA import gbl
from mma.MMA import auto
from mma.MMA import midi
from mma.MMA import tempo
from mma.MMA import parse
from mma.MMA import paths
from mma.MMA import grooves
from mma.MMA import userGroove
from mma.MMA.auto import loadDB


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

headers = {
    'Access-Control-Allow-Origin': '*'
}


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


def generate_midi(filename):
    # Clear global variables
    gbl.__init__()
    # Set paths for the libs
    paths.init()
    # Get the filename of the uploaded file
    gbl.infile = filename
    # Create first elements for midi file
    m = gbl.mtrks[0] = midi.Mtrk(0)
    m.addTrkName(0, "%s" % filename.rstrip(".mma"))
    m.addText(0, "Created by mma.MMA. Input filename: %s" % filename)
    m.addTempo(0, gbl.tempo)
    tempo.setTime(['4/4'])
    # Parse MMA file
    paths.dommaStart()
    try:
        parse.parseFile(filename)
    except SystemExit:
        print("Error on parse", flush=True)
        return None
    paths.dommaEnd()
    # Create the midi file
    paths.createOutfileName(".mid")
    out_filename = paths.outfile

    for n in gbl.tnames.values():
        if n.channel:
            n.clearPending()
            n.doMidiClear()
            n.doChannelReset()
            if n.riff:
                warning("%s has pending Riff(s)" % n.name)

    trackCount = 1    # account for meta track

    for n in sorted(gbl.mtrks.keys())[1:]:     # check all but 0 (meta)
        if len(gbl.mtrks[n].miditrk) > 1:
            trackCount += 1

    gbl.mtrks[0].addText(0, "DURATION: %d" % (gbl.totTime*60) )

    try:
        out = open(out_filename, 'wb')
        midi.writeTracks(out)
        out.close()
    except IOError:
        print("ERROR")

    grooves.grooveClear([])

    return out_filename

def create_song(request):
    # Read and copy files from mma /includes storage # 
    storage_client = storage.Client()
    mma_bucket = storage_client.get_bucket("mma-bombaim")
    blobs = mma_bucket.list_blobs(prefix="includes")
    
    for blob in blobs:
        filename = "/tmp/mma/"+str(blob.name)
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        blob.download_to_filename(filename)

    # Copy single groove
    filename = "lib/bombaim/testgroove2.mma"
    os.makedirs(os.path.dirname("/tmp/mma/"+filename), exist_ok=True)
    b = mma_bucket.blob(filename)
    b.download_to_filename("/tmp/mma/"+filename)

    # Run MMA update groves list #
    # Clear global variables and change MMAdir
    gbl.__init__()
    gbl.MMAdir = "/tmp/mma/"
    # Set paths for the libs
    paths.init()

    gbl.makeGrvDefs = 2

    try:
        auto.libUpdate()
    except SystemExit:
        print("ignoring SystemExit", flush=True)


    print("M", request.method)
    print("JSON", request.is_json)
    print("G", request.get_json())

    # Set CORS headers for preflight requests
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': 'https://mydomain.com',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Authorization',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # CREATE SONG
    if request.is_json:
        data = request.get_json()

        with tempfile.NamedTemporaryFile(mode="w", suffix=".mma", delete=False) as outfile:
            outfile.write("// Name "+ data["name"] + "\n")
            outfile.write("// Author "+ data["author"] + "\n")
            outfile.write("Lyric On" + "\n") 
            outfile.write("Tempo "+ data["tempo"] + "\n")
            outfile.write("Groove "+ data["groove"])

            # Unpack measures
            for measure in data["measures"]:
                outfile.write("\n" + str(measure) + " ")
                chord_n = 1
                chord_ids = "["
                for chord in data["measures"][measure]:
                    outfile.write(chord + " ")
                    chord_id = "m"+str(measure)+"c"+str(chord_n)+" "
                    chord_ids += chord_id 
                    chord_n += 1
                outfile.write(chord_ids+"]")
        outfile.close()
        
        if outfile:
            midi_filename = generate_midi(outfile.name)
            if midi_filename:
                return send_file(midi_filename, as_attachment=True)
            else:
                return {"error": "Something went wrong parse, please report this issue"}
        return None






    return ("SONG", 200, headers)


def create_groove(request):
    f, filename = upload_file(request)
    if f:
        groove_info = save_groove(f, filename)
        return (jsonify(**groove_info), 200, headers)

def save_groove(f, filename):
    storage_client = storage.Client()

    bucket = storage_client.get_bucket("mma-bombaim")

    new_groove = bucket.blob("lib/bombaim/"+ filename)
    
    new_groove.upload_from_string(open(f.name).read())

    return {
        "name": filename,
        "status": "available"
    }

def add_groove(event, context):
    update_grooves()

def remove_groove(event, context):
    update_grooves()

def update_grooves():
    # Read and copy files from mma storage #   
    storage_client = storage.Client()
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

    gbl.makeGrvDefs = 2

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
