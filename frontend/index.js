// App component
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import ChordChart from "./components/chord_chart/ChordChart";
import CustomAlert from "./components/utils/CustomAlert";

// Material UI
import Grid from '@material-ui/core/Grid';

let root = document.getElementById("root");

class App extends React.Component {    
    render(){
        return(
            <div>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <div style={{position: "fixed", width: "100%"}}>
                        <Header />
                        <Player />
                    </div>
                    <ChordChart />

                </Grid>

                <CustomAlert />
            </div>
        )
    }
}

ReactDOM.render(<App />, root)