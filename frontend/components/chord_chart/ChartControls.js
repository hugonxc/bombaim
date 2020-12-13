import React, { useEffect } from "react"

import { loading, sendAlert } from "../../components/utils/CustomAlert";

// Material UI
import { Drawer, Grid, Slider, Fab, Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CustomAutocomplete from "../utils/CustomAutocomplete";

// Icons
import { RiAddLine, RiSubtractLine, RiMusic2Line, RiCheckLine, RiUploadCloud2Line, RiFileUploadLine } from 'react-icons/ri';
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
                    <span className="tempo-popover-number">
                        {tempo}
                        <span className="tempo-popover-bpm"> BPM</span>    
                    </span>
                </Grid>
                <RiAddLine size="2em" onClick={increaseTempo} />
            </Grid>
            <Slider className="tempo-popover-slider" value={tempo} onChange={tempoHandler} min={20} max={400} />
        </div>
    )
}


// Upload Groove Dialog
function UploadGrooveDialog(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };

    const grooveUpload = (event) => {
        props.grooveUpload(event);
    };

    const grooveUploadClick = (event) => {
        document.getElementById("upload-groove-input").click();
    }
  
    return (
      <div>
        <label style={{cursor: "pointer"}} className="header-i" onClick={handleClickOpen}>
            <RiUploadCloud2Line size="2.3em" />
        </label>

        <Dialog onClose={handleClose} aria-labelledby="upload-groove-dialog-title" open={open}>
            <DialogTitle>Upload Groove</DialogTitle>
            <DialogContent dividers className="upload-groove-content">
                Upload your own groove respecting the .MMA format definition, after uploading you will see your new style
                available on the styles list. For more information on how build it 

                <a href="https://www.mellowood.ca/mma/online-docs/html/tut/node5.html"> click here.</a>

                <Button variant="contained" id="upload-groove-btn" onClick={grooveUploadClick}>
                    <RiFileUploadLine size="2em" color="black" id="upload-groove-btn-i"/>
                    Upload your groove
                    <input type="file" id="upload-groove-input" onChange={grooveUpload}/>
                </Button>

            </DialogContent>
        </Dialog>
      </div>
    );
}



function GrooveSelect(props) {
    const [grooves, setGrooves] = React.useState([]);

    // Get available grooves
    const getGrooves = () => {
        loading(true);
        var url  = 'https://storage.googleapis.com/grooves-bombaim/grooves/list_grooves.json';

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

    const fileUpload = (url, f) => {
        const data = new FormData();
        data.append('file', f)
        
        return fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: data
        })
    }

    const grooveUpload = (event) => {
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


    useEffect(() => {
        getGrooves();
      }, []);

      return(
        <Grid container justify="space-between" alignItems="center">
            <Grid item xs={2}><RiMusic2Line size="2em" id="groove-selector-i"/></Grid>
            <Grid item xs={9}>
                <CustomAutocomplete 
                    options={grooves}
                    onChange={updateGroove} 
                    id="groove-combo-box"
                    label="Select your style"/>
            </Grid>
            <Grid item xs={1}>
                <UploadGrooveDialog grooveUpload={grooveUpload} />
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