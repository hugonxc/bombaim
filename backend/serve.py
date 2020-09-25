import os, sys
from flask import Flask, flash, request, redirect, url_for, send_file
from werkzeug.utils import secure_filename

from mma.MMA import gbl
from mma.MMA import parse
from mma.MMA import midi
from mma.MMA import tempo
from mma.MMA import auto
from mma.MMA import paths
from mma.MMA import grooves


UPLOAD_FOLDER = './songs/'
ALLOWED_EXTENSIONS = {'mma'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def generate_midi(f):
    # Clear global variables
    gbl.__init__()

    # Set paths for the libs
    paths.init()

    # Get the filename of the uploaded file
    filename = os.path.join(app.config['UPLOAD_FOLDER'], f.filename)
    gbl.infile = filename

    # Create first elements for midi file
    m = gbl.mtrks[0] = midi.Mtrk(0)
    m.addTrkName(0, "%s" % filename.rstrip(".mma"))
    m.addText(0, "Created by mma.MMA. Input filename: %s" % filename)
    m.addTempo(0, gbl.tempo)
    tempo.setTime(['4/4'])

    # Parse MMA file
    paths.dommaStart()
    parse.parseFile(filename)
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


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # Clean folder before new upload
        for old_f in os.listdir(app.config['UPLOAD_FOLDER']):
            path = os.path.join(app.config['UPLOAD_FOLDER'], old_f)
            os.system("rm -f "+ path)

        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        f = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if f.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if f and allowed_file(f.filename):
            filename = secure_filename(f.filename)
            f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            midi_filename = generate_midi(f)
            return send_file(midi_filename, as_attachment=True)
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''