import React, { useEffect } from "react"


// Material UI
import { Drawer, Grid, Slider, Fab } from '@material-ui/core';

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
            props.updateTempo(tempo.toString());
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

    let key = 0;
    const opt = (label, grooves) =>{
       let opts = []

        for (const g of grooves) {
            key = key + 1;
            opts.push(<option value={g} key={key}>{g}</option>)        
        }

        key = key + 1;
        return(
            <optgroup label={label} key={key}>
                {opts}
            </optgroup>
        )
    }
    // Get available grooves
    const getGrooves = () => {
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
                alert("Error retrieving grooves");
        });
    }


    const mountGrooves = (grooves) => {
        let gs = []
        for (const key in grooves) {
            gs.push(opt(key, grooves[key]))
        }
        setGrooves(gs);

    }

    const updateGroove = (event) => {
        if(props.updateGroove){
            props.updateGroove(event.target.value);
        }
    }

    useEffect(() => {
        getGrooves();
      }, [])


    return(
        <span>
            <RiMusic2Line size="2em" color="black"/>
            Style:
            <select name="groove" onChange={updateGroove}>
                {grooves}
            </select>
        </span>
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
                    <Grid item xs={2}>
                        <GrooveSelect updateGroove={this.state.updateGroove}/>
                    </Grid>
                    <Grid item xs={8}>
                        <TempoSelect updateTempo={this.state.updateTempo} />
                    </Grid>
                    <Grid item xs={2}>
                        <SaveButton sendChords={this.state.sendChords}/>                        
                    </Grid>
                </Grid>
            </Drawer>
        )
    }
}

export default ChartControls;