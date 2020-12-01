import React from "react"
import WebAudioFontPlayer from 'webaudiofont'

import "./Player.css"

import Mixer from "./Mixer";

// Material
import { Grid, Box, LinearProgress } from '@material-ui/core';

// Icons
import { RiPlayLine, RiRepeat2Line, RiPauseLine, RiSkipBackLine, RiDownload2Line, RiEqualizerFill  } from 'react-icons/ri';


export function loadMidi(buff){
    this.audio_context.suspend();
    let s = this.state.song;
    s.loadedsong = true;
    this.setState({
        song: s
    })

    let midiFile = new MIDIFile(buff);
    s.lyrics = midiFile.getLyrics();
    let song = midiFile.parseSong();
    this.startLoad(song);
    this.addDownloadFile(buff);
}

function buildControls(song){
    let s = this.state.song
    s.song = song;
    this.setState({song: s});
    alert("Done");
    this.skipBack();
    this.addMixer();
    this.addDownloadFile();
    this.updateTimer();
}

function tick(){
    let song = this.state.song

    if(!song.paused){
        this.updateTimer(song.currentSongTime, song.song.duration);
        this.displayLyrics(song.currentSongTime);
        if (this.audio_context.currentTime > song.nextStepTime - song.stepDuration) {

            this.sendNotes(song.song, song.songStart, song.currentSongTime, song.currentSongTime + song.stepDuration, this.audio_context, this.input, this.player);
            song.currentSongTime = song.currentSongTime + song.stepDuration;
            song.nextStepTime = song.nextStepTime + song.stepDuration;

            if (song.currentSongTime > song.song.duration) {
                if (song.repeat) {
                    song.currentSongTime = song.currentSongTime - song.song.duration;
                    this.sendNotes(song.song, song.songStart, 0, song.currentSongTime, this.audio_context, this.input, this.player);
                    song.songStart = song.songStart + song.song.duration;    
                }else{
                    this.skipBack();
                }
            }
        }
        this.setState({song: song})
        window.requestAnimationFrame(function (t) {
            tick();
        });    
    }
}

class Player extends React.Component {
    constructor(props){
        super(props);
        this.audio_context = new (window.AudioContext || window.webkitAudioContext)();
        this.player = new WebAudioFontPlayer();
        this.input = null

        this.state = {
            progress: 0,
            currentTime: "00:00",
            durationTime: "00:00",
            status: "",
            buff: null,
            midiFileURL: "",
            download: null,
            mixer: null,
            lyrics: [],
            song: {
                name: "song",
                song: null,
                loadedsong: false,
                currentSongTime: 0,
                songStart: 0,
                nextStepTime: 0,
                stepDuration: 0,
                paused: true,
                repeat: false
            },

            style: {
                play: "player-i",
                pause: "player-i",
                repeat: "player-i"
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

        for (var i = 0; i < song.tracks.length; i++) {
            var nn = this.player.loader.findInstrument(song.tracks[i].program);
            var info = this.player.loader.instrumentInfo(nn);
            song.tracks[i].info = info;
            song.tracks[i].id = nn;
            this.player.loader.startLoad(this.audio_context, info.url, info.variable);
        }

        for (var i = 0; i < song.beats.length; i++) {
            var nn = this.player.loader.findDrum(song.beats[i].n);
            var info = this.player.loader.drumInfo(nn);
            song.beats[i].info = info;
            song.beats[i].id = nn;
            this.player.loader.startLoad(this.audio_context, info.url, info.variable);
        }
        this.player.loader.waitLoad(function () {
            buildControls(song);
        });
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

    addDownloadFile = (buff) => {
        let data = new Blob([buff], {type: 'text/midi'});
        var midiFileURL = window.URL.createObjectURL(data);
        this.setState({midiFileURL: midiFileURL});
        let download = 
            <a href={this.state.midiFileURL} download={this.state.song.name + ".midi"}>
                <RiDownload2Line size="2.2em"  className="player-i-ctrls"/>
            </a>

        this.setState({download: download});
    }


    // Player Controls
    startPlay = () => {
        this.setIconStyle("pause", "player-i");
        this.setIconStyle("play", "player-i-active");
        if (this.state.song.song != null){    
            this.state.song.paused = false;            
            this.audio_context.resume().then(function (){
                tick();
            });
        }
    }

    pause = () => {
        this.state.song.paused = true;
        this.audio_context.suspend();
        this.setIconStyle("pause", "player-i-active");
        this.setIconStyle("play", "player-i");
    }

    skipBack = () => {
        let song = this.state.song;
        song.currentSongTime = 0;
        song.songStart = this.audio_context.currentTime;
        song.nextStepTime = this.audio_context.currentTime;
        song.stepDuration = 44 / 1000;
        song.paused = true;
        this.setState({song: song});
        this.setState({progress: 0});
        this.setState({currentTime: "00:00"});
        this.audio_context.suspend();
        this.setIconStyle("pause", "player-i");
        this.setIconStyle("play", "player-i");
    }

    repeat = () => {
        this.state.song.repeat = !this.state.song.repeat;
        let v = this.state.song.repeat ? "player-i-active" : "player-i";
        this.setIconStyle("repeat", v);
    }

    setIconStyle = (name, value) => {
        let style = this.state.style;
        style[name] = value;
        this.setState({style: style});
    }

    addMixer = () => {
        this.setState({mixer: null});
        let mixer = <Mixer song={this.state.song} player={this.player} audioContext={this.audio_context} key="mixer"/>;
        this.setState({mixer: mixer});
    }

    updateTimer = (currentTime, durationTime) => {
        let currentDate = new Date(0);
        let durationDate = new Date(0);

        currentDate.setSeconds(this.state.song.currentSongTime);
        this.setState({currentTime: currentDate.toISOString().substr(14, 5)});

        durationDate.setSeconds(this.state.song.song.duration);
        this.setState({durationTime: durationDate.toISOString().substr(14, 5)});

        this.setState({progress: (100 * currentTime / durationTime)});
    }

    displayLyrics = (currentTime) => {
        for (const l of this.state.song.lyrics) {
            if(currentTime.toFixed(1) == l.playTime/1000){
                let chordId = l.text.replace(/\s/g, '');
                let currentChord = document.getElementById(chordId);
                currentChord.focus();
            }
        }
    }

    render(){
        return(
            <div>
                <Box className="player">
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={2}>
                            <RiSkipBackLine size="2.2em"  className="player-i" onClick={this.skipBack}/>
                            <RiPlayLine size="2.2em"  className={this.state.style.play} onClick={this.startPlay} />
                            <RiPauseLine size="2.2em"  className={this.state.style.pause} onClick={this.pause}/>
                            <RiRepeat2Line size="2.2em"  className={this.state.style.repeat} onClick={this.repeat}/>
                        </Grid>

                        <Grid item xs={8} className="player-time grid-center" >
                            {this.state.currentTime} / {this.state.durationTime}
                        </Grid>

                        <Grid item xs={2} className="grid-right">
                            {this.state.mixer}
                            {this.state.download}
                        </Grid>

                    </Grid>
                </Box>
                <LinearProgress className="player-progress-bar" variant="determinate" value={this.state.progress} />
            </div>
        )
    }
}

export default Player
