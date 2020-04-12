import React, { Component,Fragment } from 'react';
import InputField from './DropDowns/InputField';
import { Box,Grid, Paper,Typography,List,ListItem,ListItemText,ListItemLink } from '@material-ui/core';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';

class Body extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const styles={
            Papers:{
                padding:20,
                marginTop:10,
                marginBottom:10,
                padding: 20,
                height: 500,
                overflowY: 'auto'
            }
        }
        const exercises=this.props.exercises;
        return (
            <>
          <Grid container>
            <Grid item sm>
                <Paper elevation={5} style={styles.Papers}>
                {exercises
                 .map(([group,exercises])=>
                 <Fragment key={group}>
                    <Typography variant='h5' >
                        {group}
                    </Typography>

                     <List component="ul" aria-label="secondary mailbox folders">
                         {exercises.map(({id,title})=>
                             <ListItem button key={id}>
                             <ListItemText primary={title}/>
                           </ListItem>
                            )}
                   </List>
                   </Fragment>
                )}
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