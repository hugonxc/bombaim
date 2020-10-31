

function fileUpload(url, f){
    const data = new FormData();
    data.append('file', f)
    
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        body: data
    })
}

function grooveUpload(event){
    var url  = 'http://localhost:5000/groove';
    var f = event.target.files[0];
    var song = fileUpload(url, f);

    song.then(response => response.json())
        .then(function(json){
            alert("Groove: " + json['name'] + "\n" + 
                  "Status: " + json['status']);
            location.reload()
        })
}



// App component
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header/Header"
import { Player } from "./components/player/Player"
import ChordChart from "./components/chord_chart/ChordChart"


let root = document.getElementById("root");

class App extends React.Component {    
    render(){
        return(
            <div>
                <Header />
                <Player /> 
                <ChordChart />
            </div>
        )
    }
}

ReactDOM.render(<App />, root)