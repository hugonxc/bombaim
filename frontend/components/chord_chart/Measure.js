import React from "react";

import { Fab } from '@material-ui/core';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

import { AVAILABLE_CHORDS } from "../../utils/Chords";
import CustomAutocomplete from "../utils/CustomAutocomplete";
import "./ChordChart.css";


class Measure extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            available_chords: [],
            id: props.id,            
            chords: {}
        }
    }

    onChangeMeasure = () => {
        if(this.props.onChangeMeasure){
            let chords = []
            for (const key in this.state.chords) {
                chords.push(this.state.chords[key])
            }
            this.props.onChangeMeasure(this.state.id, chords);
        }
    }

    addChord = () => {
        let chords = this.state.chords;
        let len = Object.keys(chords).length;
        let newId = "m"+this.state.id+"c"+(len+1);
        chords[newId] = "";
        this.setState({chords: chords});
    }

    removeChord = (index) => {
        let chords = this.state.chords;
        delete chords[index];

        if((Object.keys(chords).length == 0) && (this.props.deleteMeasure)){
            this.props.deleteMeasure(this.state.id);
        }else{
            let newChords = []
            let i = 1;
    
            for (const key in chords) {
                let newId = "m"+this.state.id+"c"+(i);
                newChords[newId] = chords[key];
                i = i+1;
            }

            chords = newChords;

            this.onChangeMeasure();
        }

        this.setState({chords: chords});
    }

    onChangeChord = (event, value) => {
        // Remove automatic "-option" from id
        if (value != ""){
            let id = event.target.id.split("-")[0]
            let chords = this.state.chords;
            chords[id] = value;
            this.setState({chords: chords})
            this.onChangeMeasure();
        }

    }

    mountChordOptions = () => {
        let chs = []
        for (const key in AVAILABLE_CHORDS) {
            for (const chord of AVAILABLE_CHORDS[key]){
                chs.push({
                        group: key,
                        value: chord  
                });
            }
        }
        this.setState({available_chords: chs});
    }

    componentDidMount(){
        this.addChord();
        this.mountChordOptions();
    }

    render(){
        return(
            <div className="measure-div">
                <Fab aria-label="add-chord" onClick={this.addChord} className="measure-btn" id="add-chord-btn">
                    <RiAddLine size="1.5em"/>                    
                </Fab>

                {Object.keys(this.state.chords).map((id, key) => (
                    <div tabIndex="-1" id={"div-"+id} key={key}>
                        <Fab aria-label="remove-chord" onClick={() => this.removeChord(id)}  className="measure-btn" id="remove-chord-btn">
                            <RiSubtractLine size="1.5em"/>                    
                        </Fab>

                        <CustomAutocomplete options={this.state.available_chords} onChange={this.onChangeChord} id={id} ignoreCase={false} />
                    </div>

                ))}


            </div>
        )
    }
}

export default Measure;