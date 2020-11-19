import React from "react"

import "./Header.css"

// Material
import { Grid, Box, Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';

// Icons
import { AiFillGithub } from 'react-icons/ai';
import { RiUploadCloud2Line, RiFileUploadLine } from 'react-icons/ri';


// Upload Groove Dialog
function UploadGrooveDialog(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };

    const grooveUpload = (event) => {
        props.grooveUpload(event);
    };

    const grooveUploadClick = (event) => {
        document.getElementById("upload-groove-input").click();
    }
  
    return (
      <div>
        <label style={{cursor: "pointer"}} id="upload-groove-i" onClick={handleClickOpen}>
            <RiUploadCloud2Line size="3em" color="black"/>
        </label>

        <Dialog onClose={handleClose} aria-labelledby="upload-groove-dialog-title" open={open}>
            <DialogTitle>Upload Groove</DialogTitle>
            <DialogContent dividers className="upload-groove-content">
                Upload your own groove respecting the .MMA format definition, after uploading you will see your new style
                available on the styles list. For more information on how build it 

                <a href="https://www.mellowood.ca/mma/online-docs/html/tut/node5.html"> click here.</a>

                <Button variant="contained" id="upload-groove-btn" onClick={grooveUploadClick}>
                    <RiFileUploadLine size="2em" color="black" id="upload-groove-btn-i"/>
                    Upload your groove
                    <input type="file" id="upload-groove-input" onChange={grooveUpload}/>
                </Button>

            </DialogContent>
        </Dialog>
      </div>
    );
}


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
            <Box className="header">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    
                >   
                    <a href="/" id="title"><h1>Bombaim</h1></a>
                    
                    <Grid className="header-opts">
                        <UploadGrooveDialog grooveUpload={this.grooveUpload} />

                        <a href="https://github.com/hugonxc/bombaim">
                            <AiFillGithub size="3em" color="black"/>
                        </a>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Header;