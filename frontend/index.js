// Midi player
var webaudiofont = require('webaudiofont');

function fileUpload(url, f){
    const data = new FormData();
    data.append('file', f)
    
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        body: data
    })

}


function songUpload(event){
    var url  = 'http://localhost:5000/song';
    var f = event.target.files[0];
    var song = fileUpload(url, f);

    song.then(response => response.arrayBuffer())
        .then(function(buff){
            console.log(buff);
            var midiFile = new MIDIFile(buff);
            var song = midiFile.parseSong();
            startLoad(song);
        })
        .catch((error) => {
                alert("Something went wrong while parsing this file");
                location.reload()
        });
}

function grooveUpload(event){
    var url  = 'http://localhost:5000/groove';
    var f = event.target.files[0];
    var song = fileUpload(url, f);

    song.then(response => response.json())
        .then(function(json){
            alert("Groove: " + json['name'] + "\n" + 
                  "Status: " + json['status']);
            location.reload()
        })
}

function test(event){
    event.preventDefault();
    var url  = 'http://localhost:5000/test';

    let myForm = document.getElementById('form');
    let formData = new FormData(myForm);

    var chords = []
    var opts = document.querySelectorAll("#chords option:checked");
    for (const opt of opts) {
        chords.push(opt.value)
    }

    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });

    object["Chords"] = chords
    var data = JSON.stringify(object);
    console.log(data);


    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'POST',
        body: data
    }).then(response => response.arrayBuffer())
    .then(function(buff){
        console.log(buff);
        var midiFile = new MIDIFile(buff);
        var song = midiFile.parseSong();
        startLoad(song);
    })
    .catch((error) => {
            alert("Something went wrong while parsing this file");
            location.reload()
    });
}

function startLoad(song) {
    var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextFunc();
    player = new WebAudioFontPlayer();
    reverberator = player.createReverberator(audioContext);
    reverberator.output.connect(audioContext.destination);
    input = reverberator.input;

    console.log("tracks", song.tracks);
    for (var i = 0; i < song.tracks.length; i++) {
        var nn = player.loader.findInstrument(song.tracks[i].program);
        var info = player.loader.instrumentInfo(nn);
        song.tracks[i].info = info;
        song.tracks[i].id = nn;
        player.loader.startLoad(audioContext, info.url, info.variable);
    }
    console.log("beats", song.beats);
    for (var i = 0; i < song.beats.length; i++) {
        var nn = player.loader.findDrum(song.beats[i].n);
        var info = player.loader.drumInfo(nn);
        song.beats[i].info = info;
        song.beats[i].id = nn;
        player.loader.startLoad(audioContext, info.url, info.variable);
    }
    player.loader.waitLoad(function () {
        console.log('buildControls');
        buildControls(song);
    });
}

function buildControls(song) {
    audioContext.resume();
    loadedsong = song;
    alert("Done");
}


function startPlay() {
    song = loadedsong;
    currentSongTime = 0;
    songStart = audioContext.currentTime;
    nextStepTime = audioContext.currentTime;
    var stepDuration = 44 / 1000;
    tick(song, stepDuration);
}


function tick(song, stepDuration) {
    console.log("tick");
    if (audioContext.currentTime > nextStepTime - stepDuration) {
        sendNotes(song, songStart, currentSongTime, currentSongTime + stepDuration, audioContext, input, player);
        currentSongTime = currentSongTime + stepDuration;
        nextStepTime = nextStepTime + stepDuration;
        if (currentSongTime > song.duration) {
            currentSongTime = currentSongTime - song.duration;
            sendNotes(song, songStart, 0, currentSongTime, audioContext, input, player);
            songStart = songStart + song.duration;
        }
    }
    window.requestAnimationFrame(function (t) {
        tick(song, stepDuration);
    });
}


function sendNotes(song, songStart, start, end, audioContext, input, player) {
    for (var t = 0; t < song.tracks.length; t++) {
        var track = song.tracks[t];
        for (var i = 0; i < track.notes.length; i++) {
            if (track.notes[i].when >= start && track.notes[i].when < end) {
                var when = songStart + track.notes[i].when;
                var duration = track.notes[i].duration;
                if (duration > 3) {
                    duration = 3;
                }
                var instr = track.info.variable;
                var v = track.volume / 7;
                player.queueWaveTable(audioContext, input, window[instr], when, track.notes[i].pitch, duration, v, track.notes[i].slides);
            }
        }
    }
    for (var b = 0; b < song.beats.length; b++) {
        var beat = song.beats[b];
        for (var i = 0; i < beat.notes.length; i++) {
            if (beat.notes[i].when >= start && beat.notes[i].when < end) {
                var when = songStart + beat.notes[i].when;
                var duration = 1.5;
                var instr = beat.info.variable;
                var v = beat.volume / 2;
                player.queueWaveTable(audioContext, input, window[instr], when, beat.n, duration, v);
            }
        }
    }
}




// Page component
var m = require("mithril")
var root = document.body

var Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Groove upload"),
            m("input.input[type=file]", {id: "groove-upload", onchange: grooveUpload}),
            m("h1", {class: "title"}, "Song upload"),
            m("input.input[type=file]", {id: "song-upload", onchange: songUpload}),
            m("button", {onclick: startPlay}, "Play"),
            
            m("div", [
                m("form", {id: "form"}, [
                    m("label.label", "Tempo"),
                    m("input.input[type=text][placeholder=Tempo][name=Tempo]"),
                    m("label.label", "Groove"),
                    m("input.input[placeholder=Groove][name=Groove]"),
                    m("label.label", "Chords",),
                    m("select[name=Chords][multiple=True]", {id: "chords"},[
                        m('option', { value: "C" }, "C"),
                        m('option', { value: "D" }, "D"),
                        m('option', { value: "E" }, "E"),
                        m('option', { value: "F" }, "F"),
                        m('option', { value: "G" }, "G"),
                    ]),
                    m("button", {onclick: test}, "SEND"),
                ]),
            ]),
        ])
    }
}
m.mount(root, Hello)