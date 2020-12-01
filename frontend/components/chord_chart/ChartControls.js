import React, { useEffect } from "react"

import { loading, sendAlert } from "../../components/utils/CustomAlert";

// Material UI
import { Drawer, Grid, Slider, Fab } from '@material-ui/core';
import CustomAutocomplete from "../utils/CustomAutocomplete";

// Icons
import { RiAddLine, RiSubtractLine, RiMusic2Line, RiCheckLine } from 'react-icons/ri';
import { GiMetronome } from 'react-icons/gi';

function TempoSelect(props){
    const [tempo, setTempo] = React.useState(80);

    const tempoHandler = (event, newValue) =>{
        setTempo(newValue);
    }

    const increaseTempo = () =>{
        if(tempo+1 < 400){
            setTempo(tempo+1);
        }else{
            setTempo(400);
        }
    }

    const decreaseTempo = () =>{
        if(tempo-1 > 20){
            setTempo(tempo-1);
        }else{
            setTempo(20);
        }
    }

    useEffect(() => {
        if(props.updateTempo){
            props.updateTempo("tempo", tempo.toString());
        }
     }, [tempo]);


    return(
        <div className="tempo-popover-content">
            <Grid container justify="space-between">
                <RiSubtractLine size="2em" onClick={decreaseTempo}/>
                <Grid container className="tempo-popover-center" justify="center" alignItems="flex-start">
                    <GiMetronome size="2em" />
                    <span className="tempo-popover-number">{tempo}</span>
                </Grid>
                <RiAddLine size="2em" onClick={increaseTempo} />
            </Grid>
            <Slider className="tempo-popover-slider" value={tempo} onChange={tempoHandler} min={20} max={400} />
        </div>
    )
}


function GrooveSelect(props) {
    const [grooves, setGrooves] = React.useState([]);

    // Get available grooves
    const getGrooves = () => {
        loading(true);
        var url  = 'http://localhost:5000/list_grooves';

        fetch(url, {
            mode: 'cors',
            method: 'GET',
        }).then(response => response.json())
        .then(
            (response) => {
                mountGrooves(response);
            }
        )
        .catch((error) => {
                loading(false);
                sendAlert("error", "Cannot load groove list :(");
        });
    }

    const mountGrooves = (grooves) => {
        let gs = []
        for (const key in grooves) {
            for (const groove of grooves[key]){
                gs.push({
                        group: key,
                        value: groove  
                });
            }
        }
        loading(false);
        setGrooves(gs);
    }

    const updateGroove = (event, newValue) => {
        if(props.updateGroove){
            props.updateGroove("groove", newValue);
        }
    }

    useEffect(() => {
        getGrooves();
      }, []);

      return(
        <Grid container justify="space-between" alignItems="center">
            <Grid item xs={2}><RiMusic2Line size="2em" id="groove-selector-i"/></Grid>
            <Grid item xs={10}>
                <CustomAutocomplete 
                    options={grooves}
                    onChange={updateGroove} 
                    id="groove-combo-box"
                    label="Select your style"/>
            </Grid>
        </Grid>
      )
}


function SaveButton(props) {
    const sendChords = (event) => {
        props.sendChords(event);
    }

    return(
        <div className="grid-right">
            <Fab aria-label="save" onClick={sendChords} id="send-chords-btn">
                <RiCheckLine size="2em" color="white"/>                    
            </Fab>
        </div>
    )
}


class ChartControls extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            sendChords: this.props.sendChords,
            updateTempo: this.props.updateTempo,
            updateGroove: this.props.updateGroove,
        }
    }

    render(){
        return(
            <Drawer variant="permanent" anchor="bottom">
                <Grid container className="chart-controls" justify="space-between" alignItems="center">
                    <Grid item xs={3}>
                        <GrooveSelect updateGroove={this.state.updateGroove}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TempoSelect updateTempo={this.state.updateTempo} />
                    </Grid>
                    <Grid item xs={3}>
                        <SaveButton sendChords={this.state.sendChords}/>                        
                    </Grid>
                </Grid>
            </Drawer>
        )
    }
}

export default ChartControls;