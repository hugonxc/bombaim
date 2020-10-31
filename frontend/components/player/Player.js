import React from "react"
import WebAudioFontPlayer from 'webaudiofont'


function loadMidi(buff){
    let s = this.state.song
    s.loadedsong = true
    this.setState({
        song: s
    })

    let midiFile = new MIDIFile(buff);
    let song = midiFile.parseSong();
    this.startLoad(song);
}

function buildControls(song){
    this.audio_context.resume();
    let s = this.state.song
    s.song = song
    this.setState({song: s});
    alert("Done");
}

function tick(){
    console.log("tick");
    let song = this.state.song
    if (this.audio_context.currentTime > song.nextStepTime - song.stepDuration) {

        this.sendNotes(song.song, song.songStart, song.currentSongTime, song.currentSongTime + song.stepDuration, this.audio_context, this.input, this.player);
        song.currentSongTime = song.currentSongTime + song.stepDuration;
        song.nextStepTime = song.nextStepTime + song.stepDuration;
        if (song.currentSongTime > song.song.duration) {
            song.currentSongTime = song.currentSongTime - song.song.duration;
            this.sendNotes(song.song, song.songStart, 0, song.currentSongTime, this.audio_context, this.input, this.player);
            song.songStart = song.songStart + song.song.duration;
        }
    }
    this.setState({song: song})
    window.requestAnimationFrame(function (t) {
        tick();
    });
}

class Player extends React.Component {
    constructor(props){
        super(props);
        this.audio_context = new (window.AudioContext || window.webkitAudioContext)();
        this.player = new WebAudioFontPlayer();
        this.input = null

        this.state = {
            status: "",
            buff: null,
            song: {
                song: null,
                loadedsong: false,
                currentSongTime: 0,
                songStart: 0,
                nextStepTime: 0,
                stepDuration: 0,
            }
        }
        loadMidi = loadMidi.bind(this);
        buildControls = buildControls.bind(this);
        tick = tick.bind(this);
    }

    startLoad = (song) => {
        let reverberator = this.player.createReverberator(this.audio_context);
        reverberator.output.connect(this.audio_context.destination);
        this.input = reverberator.input;

        console.log("tracks", song.tracks);
        for (var i = 0; i < song.tracks.length; i++) {
            var nn = this.player.loader.findInstrument(song.tracks[i].program);
            var info = this.player.loader.instrumentInfo(nn);
            song.tracks[i].info = info;
            song.tracks[i].id = nn;
            this.player.loader.startLoad(this.audio_context, info.url, info.variable);
        }
        console.log("beats", song.beats);
        for (var i = 0; i < song.beats.length; i++) {
            var nn = this.player.loader.findDrum(song.beats[i].n);
            var info = this.player.loader.drumInfo(nn);
            song.beats[i].info = info;
            song.beats[i].id = nn;
            this.player.loader.startLoad(this.audio_context, info.url, info.variable);
        }
        this.player.loader.waitLoad(function () {
            console.log('buildControls');
            buildControls(song);
        });
    }
    
    startPlay = (event) => {
        event.preventDefault();
        this.state.song.currentSongTime = 0;
        this.state.song.songStart = this.audio_context.currentTime;
        this.state.song.nextStepTime = this.audio_context.currentTime;
        this.state.song.stepDuration = 44 / 1000;
        tick(this.state.song.song, this.state.song.stepDuration);
    }
    
    sendNotes = (song, songStart, start, end, audioContext, input, player) => {
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

    render(){
        return(
            <div>
                <h1>Player</h1>
                {
                    this.state.song.loadedsong == true &&
                    <button onClick={this.startPlay}>Play</button>                    
                }
            </div>

        )
    }
}

export { Player, loadMidi }
