import React from "react"
import { loadMidi } from "../../components/player/Player"
import Measure from "./Measure";


class ChordChart extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tempo: '',
            groove: '',
            measures: {
                1: [],
            }
        }
    }
    
    
    sendChords = (event) => {
        event.preventDefault();
        var url  = 'http://localhost:5000/song';

        var data = JSON.stringify(this.state);
        console.log("D", data);
    
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            method: 'POST',
            body: data
        }).then(response => response.arrayBuffer())
        .then(function(buff){
            loadMidi(buff);
        })
        .catch((error) => {
                alert("Something went wrong while parsing this file");
                // location.reload()
        });
    }

    inputHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    addMeasures = (event) => {
        event.preventDefault();
        let measures = this.state.measures;
        let len = Object.keys(measures).length;
        measures[len+1] = [];
        this.setState({measures: measures})
    }

    onChangeMeasure = (id, chords) => {
        let measures = this.state.measures;
        measures[id] = chords;
        this.setState({measures: measures})
    }

    render(){
        return(
            <div>
                <h1>Chord Chart</h1>
                <form>
                    Tempo: <input type="text" name="tempo" onChange={this.inputHandler} ></input>
                    Groove: <input type="text" name="groove" onChange={this.inputHandler}></input>
                    
                    Chords sequence: <br/>
                    {Object.keys(this.state.measures).map((id, key) => (
                        <Measure id={id} key={key} onChangeMeasure={this.onChangeMeasure}/>
                    ))}

                    <button onClick={this.addMeasures}>+</button>
                    <button onClick={this.sendChords}>Save</button>
                </form>
            </div>

        )
    }
}

export default ChordChart;