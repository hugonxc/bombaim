// App component
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header/Header"
import Player from "./components/player/Player"
import ChordChart from "./components/chord_chart/ChordChart"

// Material UI
import Grid from '@material-ui/core/Grid';

let root = document.getElementById("root");

class App extends React.Component {    
    render(){
        return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
            >
                <Header />
                <Player />
                <ChordChart />

            </Grid>
        )
    }
}

ReactDOM.render(<App />, root)