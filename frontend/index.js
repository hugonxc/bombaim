// Midi player
var webaudiofont = require('webaudiofont');

function fileUpload(event){
    const data = new FormData();
    data.append('file', event.target.files[0])
    
    fetch('http://localhost:5000/', {
        mode: 'cors',
        method: 'POST',
        body: data
    })
    .then(response => response.blob())
    .then(function(r_blob){
        var fileReader = new FileReader();
        fileReader.onload = function (progressEvent) {
            var arrayBuffer = progressEvent.target.result;
            var midiFile = new MIDIFile(arrayBuffer);
            var song = midiFile.parseSong();
            startLoad(song);
        };
        fileReader.readAsArrayBuffer(r_blob);
    })
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
            m("h1", {class: "title"}, "Sample test"),
            m("input.input[type=file]", {onchange: fileUpload}),
            m("button", {onclick: startPlay}, "Play")
        ])
    }
}
m.mount(root, Hello)