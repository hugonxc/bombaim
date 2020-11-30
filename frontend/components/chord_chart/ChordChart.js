import React, { useEffect } from "react"
import { loadMidi } from "../../components/player/Player"
import Measure from "./Measure";
import ChartControls from "./ChartControls";

import "./ChordChart.css";

// Material UI
import { Grid, Fab } from '@material-ui/core';

// Icons
import { RiAddLine } from 'react-icons/ri';


function CustomInput(props){
    let [value, setValue] = React.useState(props.value);
    let className = props.className;
    let inputName = props.name;

    const inputHandler = (event) =>{
        if(props.onChange != null){
            let name = event.target.name;
            let value = event.target.value;
            setValue(value);
            props.onChange(name, value);
        }
    }

    return(
        <Grid item>
            <input type="text"name={inputName} value={value} onChange={inputHandler} className={className}/>
        </Grid>
    )
}



class ChordChart extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            opts: [],
            chart: {
                name: "Song name",
                author: "Author",
                tempo: "80",
                groove: "",
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

    inputHandler = (name, value) => {
        let chart = this.state.chart;
        chart[name] = value;
        this.setState({chart: chart});
    }

    updateGroove = (value) => {
        let chart = this.state.chart;
        chart.groove = value
        this.setState({chart: chart});
    }

    updateTempo = (value) => {
        let chart = this.state.chart;
        chart.tempo = value
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



    render(){
        return(
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="chart"
            >
                <CustomInput name="name" value={this.state.chart.name} onChange={this.inputHandler} className="chart-name" />

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <CustomInput name="author" value={this.state.chart.author} onChange={this.inputHandler} className="chart-author" />
                    
                </Grid>
                
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    {Object.keys(this.state.chart.measures).map((id, key) => (
                        <Grid item xs={3} key={"item"+id} className="measure">
                            <Measure id={id} key={key} onChangeMeasure={this.onChangeMeasure}/>
                        </Grid>

                    ))}

                    <Grid item xs={3}>
                        <div className="add-measures">
                            <Fab aria-label="add" id="add-measures-btn" onClick={this.addMeasures}>
                                <RiAddLine size="2em" color="white"/>                    
                            </Fab>
                        </div>

                    </Grid>

                </Grid>
            </Grid>

            <ChartControls updateTempo={this.inputHandler} sendChords={this.sendChords} updateGroove={this.inputHandler}/>

        </div>

        )
    }
}

export default ChordChart;