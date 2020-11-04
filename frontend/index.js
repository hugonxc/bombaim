// App component
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header/Header"
import Groove from "./components/groove/Groove"
import Player from "./components/player/Player"
import ChordChart from "./components/chord_chart/ChordChart"

let root = document.getElementById("root");

class App extends React.Component {    
    render(){
        return(
            <div>
                <Header />
                <Groove />
                <Player />
                <ChordChart />
            </div>
        )
    }
}

ReactDOM.render(<App />, root)