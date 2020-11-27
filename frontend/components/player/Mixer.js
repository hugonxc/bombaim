import React from "react"

import "./Player.css"

// Material
import { Grid, Slider, Dialog, DialogContent, DialogTitle, MenuItem, Select } from '@material-ui/core';

// Icons
import { RiEqualizerFill, RiVolumeUpFill, RiVolumeMuteFill } from 'react-icons/ri';


function TrackVolume(props){
    let song = props.song ? props.song : null;
    let vId = props.vId ? props.vId : 0;
    let type = props.type ? props.type : "";
    const [volume, setVolume] = React.useState(song[type][vId].volume * 100);

    const handler = (event, newVolume) => {
        let v = newVolume / 100;
        if (v < 0.000001) {
            v = 0.000001;
        }
        song[type][vId].volume = v;
        setVolume(newVolume);

    };

    return (<Slider className="mix-volume-slider" value={volume} onChange={handler} key={"slider"+type+vId} />);
}

function Chooser(props){
    let player = props.player ? props.player : null;
    let audioContext = props.audioContext ? props.audioContext : null;    
    let song = props.song ? props.song : null;
    let type = props.type ? props.type : "";  
    let keys = props.keys ? props.keys : [];
    let info = props.info ? props.info : null;
    const [opt, setOpt] = React.useState(props.opt);
    const [id, setId] = React.useState(opt.id);
    let opts = [];

    const handler = (event) => {
        player.cancelQueue(audioContext);
        setId(event.target.value);
        let newInfo = player.loader[info](event.target.value);
        player.loader.startLoad(audioContext, newInfo.url, newInfo.variable);
        player.loader.waitLoad(function () {
             opt.info = newInfo;
             opt.id = event.target.value;
         });

    };

    Object.keys(player.loader[keys]()).map(function(key, index) {
        opts.push(
            <MenuItem value={key} key={player.loader[info](key).title+"_"+id+key}>
                {player.loader[info](key).title}
            </MenuItem>)
    });

    return (<Select value={id} key={"select"+type+id} onChange={handler}>{opts}</Select>);
}


class Mixer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            song: null,
            player: null,
            audioContext: null,
            mixer: {},
            channels: {
                tracks: [],
                volumes: []
            },
            drums: {
                tracks: [],
                volumes: []
            }    
        }
    }

    componentDidMount() {
        this.state.song = this.props.song;
        this.state.player = this.props.player;
        this.state.audioContext = this.props.audioContext;
        this.loadInstruments();
    }

    // Modal funcs
    handleClickOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = (value) => {
        this.setState({open: false});
    };

    // Mixer funcs
    loadInstruments = () => {
        let song = this.state.song.song;
        let player = this.state.player;
        let audioContext = this.state.audioContext;
        let channels = {
            tracks: [],
            volumes: []
        }
        let drums = {
            tracks: [],
            volumes: []
        }
        

        if(song){
            // Instruments
            for (var i = 0; i < song.tracks.length; i++) {
                var v = 100 * song.tracks[i].volume;
                channels.tracks.push(
                    <Chooser 
                        player={player}
                        audioContext={audioContext}
                        song={song}
                        type="tracks"
                        keys={"instrumentKeys"}
                        info={"instrumentInfo"} 
                        opt={song.tracks[i]}
                        key={"iChooser"+i}
                    />
                );
                channels.volumes.push(<TrackVolume vId={i} song={song} volume={v} type="tracks" key={"iTrackVolume"+i}/>);
            }

            // Drums
            for (var i = 0; i < song.beats.length; i++) {
                var v = 100 * song.beats[i].volume;
                drums.tracks.push(
                    <Chooser 
                        player={player}
                        audioContext={audioContext}
                        song={song}
                        type="beats"                     
                        keys="drumKeys"
                        info="drumInfo"
                        opt={song.beats[i]}
                        key={"dChooser"+i}
                    />
                );
                drums.volumes.push(<TrackVolume vId={i} song={song} volume={v} type="beats" key={"dTrackVolume"+i} />);
            }
        }

        this.setState({channels: channels});
        this.setState({drums: drums});
    }


    render(){
        return(
            <div className="mixer player-i-ctrls">
                <label style={{cursor: "pointer"}} id="mixer-i" onClick={this.handleClickOpen}>
                    <RiEqualizerFill size="2.2em" />
                </label>
                
                <Dialog onClose={this.handleClose} aria-labelledby="mixer-dialog-title" open={this.state.open}>
                    <DialogTitle>Mixer</DialogTitle>
                    <DialogContent dividers className="mixer-content">
                        <h3 className="subtitle" >General Instruments</h3>
                        <Grid container>
                            {this.state.channels.tracks.map((track, index) => (
                                <Grid container alignItems="flex-end" className="mix-ch" key={"inst"+index}>
                                    <Grid item className="mix-trk" xs={6}>{track}</Grid>
                                    <Grid item xs={6}>
                                        <RiVolumeUpFill className="mix-volume-i"/>
                                        {this.state.channels.volumes[index]}
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>

                    <DialogContent dividers className="mixer-content">
                        <h3 className="subtitle">Drums</h3>
                        <Grid container>
                            {this.state.drums.tracks.map((track, index) => (
                                <Grid container alignItems="flex-end" className="mix-ch" key={"drums"+index}>
                                    <Grid item className="mix-trk" xs={6}>{track}</Grid>
                                    <Grid item xs={6}>
                                        <RiVolumeUpFill className="mix-volume-i"/>
                                        {this.state.drums.volumes[index]}
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>
                </Dialog>
            </div>            
        )
    }
}

export default Mixer;