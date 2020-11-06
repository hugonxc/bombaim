import React from "react"
import { loadMidi } from "../../components/player/Player"
import Measure from "./Measure";

let key = 0;

function opt(label, grooves){
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



class ChordChart extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            opts: [],
            chart: {
                tempo: '',
                groove: '',
                measures: {
                    1: [],
                }
            }
        }
    }
    
    sendChords = (event) => {
        event.preventDefault();
        var url  = 'http://localhost:5000/song';

        var data = JSON.stringify(this.state.chart);
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
        let chart = this.state.chart;
        chart[name] = value;
        this.setState({chart: chart});
    }

    addMeasures = (event) => {
        event.preventDefault();
        let chart = this.state.chart;
        let len = Object.keys(chart.measures).length;
        chart.measures[len+1] = [];
        this.setState({chart: chart})
    }

    onChangeMeasure = (id, chords) => {
        let chart = this.state.chart;
        chart.measures[id] = chords;
        this.setState({chart: chart})
    }

    // Get available grooves
    getGrooves = () => {
        var url  = 'http://localhost:5000/list_grooves';

        fetch(url, {
            mode: 'cors',
            method: 'GET',
        }).then(response => response.json())
        .then(
            (response) => {
                this.mountGrooves(response);
            }
        )
        .catch((error) => {
                alert("Error retrieving grooves");
        });
    }

    mountGrooves = (grooves) => {
        let gs = []
        for (const key in grooves) {
            gs.push(opt(key, grooves[key]))
        }
        this.setState({opts: gs})
    }

    componentDidMount(){
        this.getGrooves();
    }


    render(){
        return(
            <div>
                <h1>Chord Chart</h1>
                <form>
                    Tempo: <input type="text" name="tempo" onChange={this.inputHandler} ></input>
                    Groove: 
                    <select name="groove" onChange={this.inputHandler}>
                        {this.state.opts}
                    </select>
                    
                    Chords sequence: <br/>
                    {Object.keys(this.state.chart.measures).map((id, key) => (
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