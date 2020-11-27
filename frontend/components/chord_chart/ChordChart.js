import React, { useEffect } from "react"
import { loadMidi } from "../../components/player/Player"
import Measure from "./Measure";
import ChartControls from "./ChartControls";

import "./ChordChart.css";

// Material UI
import { Grid, Fab, Slider, Popover, BottomNavigationAction, BottomNavigation } from '@material-ui/core';

// Icons
import { RiMusic2Line, RiCheckLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { GiMetronome } from 'react-icons/gi';






class ChordChart extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            opts: [],
            chart: {
                tempo: "80",
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

    updateGroove = (value) => {
        console.log("value");
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
                alignItems="stretch"
                className="chart"
            >

                <p className="chart-name">Chart Name</p>

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >

                    <p>Author</p>
                    
                </Grid>
                



                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    {Object.keys(this.state.chart.measures).map((id, key) => (
                        <Measure id={id} key={key} onChangeMeasure={this.onChangeMeasure}/>
                    ))}

                    <div className="add-measures">
                        <Fab aria-label="add" id="add-measures-btn" onClick={this.addMeasures}>
                            <RiAddLine size="2em" color="white"/>                    
                        </Fab>
                    </div>

                </Grid>
            </Grid>

            <ChartControls updateTempo={this.updateTempo} sendChords={this.sendChords} updateGroove={this.updateGroove}/>

        </div>

        )
    }
}

export default ChordChart;