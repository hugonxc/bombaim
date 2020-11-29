import shutil
import tempfile
import os, sys, json
from flask_cors import CORS, cross_origin
from flask import Flask, flash, request, redirect, url_for, send_file, jsonify

from mma import MMAdir
from mma.MMA import gbl
from mma.MMA import auto
from mma.MMA import midi
from mma.MMA import tempo
from mma.MMA import parse
from mma.MMA import paths
from mma.MMA import grooves
from mma.MMA import userGroove

ALLOWED_EXTENSIONS = {'mma'}
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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

def add_groove(f, filename):
    # Clear global variables
    gbl.__init__()
    # Set paths for the libs
    paths.init()

    # Copy file to lib folder
    shutil.copy(f.name, MMAdir+"/lib/"+filename)
    gbl.makeGrvDefs = 1

    try:
        auto.libUpdate()
    except SystemExit:
        print("ignoring SystemExit", flush=True)
    
    grooves.grooveClear([])
    
    return {
        "name": filename,
        "status": "available"
    }

@app.route('/groove', methods=['POST'])
def upload_groove():
    f, filename = upload_file(request)
    if f:
        groove_info = add_groove(f, filename)
        return jsonify(**groove_info)
    return None


@app.route('/song', methods=['POST'])
def song():
    if request.is_json:
        data = request.get_json()

        with tempfile.NamedTemporaryFile(mode="w", suffix=".mma", delete=False) as outfile:
            outfile.write("// Name "+ data["name"] + "\n")
            outfile.write("// Author "+ data["author"] + "\n")
            outfile.write("Tempo "+ data["tempo"] + "\n")
            outfile.write("Groove "+ data["groove"])

            # Unpack measures
            for measure in data["measures"]:
                outfile.write("\n" + str(measure) + " ")
                for chord in data["measures"][measure]:
                    outfile.write(chord + " ")
        outfile.close()
        
        if outfile:
            midi_filename = generate_midi(outfile.name)
            if midi_filename:
                return send_file(midi_filename, as_attachment=True)
            else:
                return {"error": "Something went wrong parse, please report this issue"}
        return None



from mma.MMA.auto import loadDB

@app.route('/list_grooves', methods=['GET'])
def list_grooves():
    # Clear global variables
    gbl.__init__()
    # Set paths for the libs
    paths.init()

    # Needed import for global variable libDirs after paths.init() method ran
    from mma.MMA.paths import libDirs

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

                grooves.update({
                        name: gs
                    })

    return jsonify(grooves)