import React from "react"


class Groove extends React.Component {
    fileUpload = (url, f) => {
        const data = new FormData();
        data.append('file', f)
        
        return fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: data
        })
    }
    
    grooveUpload = (event) => {
        var url  = 'http://localhost:5000/groove';
        var f = event.target.files[0];
        var song = this.fileUpload(url, f);
    
        song.then(response => response.json())
            .then(function(json){
                alert("Groove: " + json['name'] + "\n" + 
                      "Status: " + json['status']);
                location.reload()
            })
    }


    render(){
        return(
            <div>
                <h1>Groove</h1>
                <input type="file" id="groove-upload" onChange={this.grooveUpload} />
            </div>

        )
    }
}

export default Groove;