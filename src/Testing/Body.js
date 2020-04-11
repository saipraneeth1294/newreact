import React, { Component } from 'react';
import InputField from './DropDowns/InputField';
import { Box,Grid, Paper } from '@material-ui/core';

class Body extends Component {
    render() {
        const styles={
            Papers:{padding:20,marginTop:10,marginBottom:10}
        }
        return (
            <>
          <Grid container>
            <Grid item sm>
                <Paper elevation={5} style={styles.Papers}>
                Left
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper elevation={5} style={styles.Papers}>
                Right
                </Paper>
            </Grid>
          </Grid>
            </>
        );
    }
}

export default Body;