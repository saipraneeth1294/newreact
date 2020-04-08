import React, { Component } from 'react';
import {Box,Container, Grid, AppBar,Paper} from '@material-ui/core'

class Footer extends Component {
    render() {
        return (
           <>
            <Box width={1} height={50} style={{bottom:'0',position:'fixed', color:'Purple'}} position='static'>
                    Footer
            </Box>
           </>
        );
    }
}

export default Footer;