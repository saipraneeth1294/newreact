import React, { Component } from 'react';
import { Box, Container, Grid, AppBar, Paper } from '@material-ui/core';


class Footers extends Component {
  render() {
    return (
      <>
     
        <Box  width={1}  style={{ bottom: '0', position: 'fixed', color: 'Purple' }} position='static'>
        <Paper elevation={9}>
         Footer
         </Paper>
        </Box>
        
      </>
    );
  }
}

export default Footers;