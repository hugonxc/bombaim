import React from "react"

import "./ChordChart.css";

class Measure extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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

    onChangeChord = (event) => {
        let chords = this.state.chords;
        chords[event.target.id] = event.target.value;
        this.setState({chords: chords})
        this.onChangeMeasure();
    }

    componentDidMount(){
        this.addChord();
    }


    render(){
        return(
            <div className="measure-div">
                {Object.keys(this.state.chords).map((id, key) => (
                    <input type="text" id={id} key={key} onChange={this.onChangeChord}></input>
                ))}
                <button onClick={this.addChord}>+</button>

            </div>
        )
    }
}

export default Measure;