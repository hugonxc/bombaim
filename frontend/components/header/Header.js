import React from "react"

// Material
import { Grid, Box } from '@material-ui/core';

// Icons
import { AiFillGithub } from 'react-icons/ai';
import { RiUploadCloud2Line } from 'react-icons/ri';

class Header extends React.Component {
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
            <Box bgcolor="#FF9052">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    
                >
                    <h1>Bombaim</h1>

                    <Grid>
                        <label style={{cursor: "pointer"}}>
                            <RiUploadCloud2Line size="3em" color="black"/>
                            <input type="file" id="groove-upload" onChange={this.grooveUpload} style={{display: "none" }}/>
                        </label>

                        <a><AiFillGithub size="3em" /></a>
                    </Grid>


                </Grid>
            </Box>
        )
    }
}

export default Header;