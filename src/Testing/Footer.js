import React, { Component } from 'react';
import {Box,Container, Grid, AppBar,Paper} from '@material-ui/core'

class Footer extends Component {
    render() {
        return (
           <>
            <Box width={1} height='10%' style={{bottom:'0',position:'fixed', color:'Purple'}} position='static'>
                <Grid>
                  <Paper elevation={3} height='100%'>
                      <Box height='100%'>
                        Footer
                      </Box>
                    </Paper>
                    </Grid>
            </Box>
           </>
        );
    }
}

export default Footer;