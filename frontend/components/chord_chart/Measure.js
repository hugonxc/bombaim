import React from "react"

import "./ChordChart.css";

class Measure extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.id,            
            chords: {
                1: "",
            }
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

    addChord = (event) => {
        event.preventDefault();
        let chords = this.state.chords;
        let len = Object.keys(chords).length;
        chords[len+1] = "";
        this.setState({chords: chords});
    }

    onChangeChord = (event) => {
        let chords = this.state.chords;
        chords[event.target.id] = event.target.value;
        this.setState({chords: chords})
        this.onChangeMeasure();
    }

    render(){
        return(
            <div className="measure-div">
                {Object.keys(this.state.chords).map((id, key) => (
                    <input type="text" id={this.state.id} key={key} onChange={this.onChangeChord}></input>
                ))}


            </div>
        )
    }
}

export default Measure;