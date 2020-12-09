import React from "react"

import "./Header.css"

// Material
import { Grid, Box } from '@material-ui/core';

// Icons
import { AiFillGithub } from 'react-icons/ai';


class Header extends React.Component {
    render(){
        return(
            <Box className="header">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    
                >   
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="grid-center">
                        <a href="/" id="title"><h1>BOMBAIM</h1></a>
                    </Grid>
                    <Grid item xs={2} className="grid-right">
                        <a href="https://github.com/hugonxc/bombaim">
                            <AiFillGithub size="3em" className="header-i"/>
                        </a>
                    </Grid>                    
                </Grid>
            </Box>
        )
    }
}

export default Header;