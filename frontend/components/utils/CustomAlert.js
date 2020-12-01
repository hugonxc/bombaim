import React from "react";
import { Snackbar, Backdrop, CircularProgress } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export function loading(value){
    this.setState({openBackdrop: value});
}

export function sendAlert(type, message){
    this.setState({alertType: type});
    this.setState({alertMsg: message});
    this.setState({alertOpen: true});
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class CustomAlert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anchor: {
                vertical: "top",
                horizontal: "center"
            },
            openBackdrop: false,
            alertOpen: false,
            alertMsg: "",
            alertType: "",
        }

        loading = loading.bind(this);
        sendAlert = sendAlert.bind(this);
    }


    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({alertOpen: false});
    };

    render(){
        return(
            <div>
                <Backdrop open={this.state.openBackdrop} className="backdrop" >
                    <CircularProgress color="inherit" />
                </Backdrop>
        
                <Snackbar anchorOrigin={this.state.anchor} open={this.state.alertOpen} autoHideDuration={3000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.state.alertType}>
                        {this.state.alertMsg}
                    </Alert>
                </Snackbar>
            </div>    
        )
    }

}

export default CustomAlert;