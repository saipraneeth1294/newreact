import React, { Component,Fragment } from 'react';
import InputField from '../DropDowns/InputField';
import { Box,Grid, Paper,Typography,List,ListItem,ListItemText,ListItemLink } from '@material-ui/core';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';

class Body extends Component {
    constructor(props){
        super(props);
    }

    selected=(id)=>{
        this.props.handleExerciseChange(id);
    };
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
        const{exercise}= this.props;
        const{title,description}=exercise;
        const exercises=this.props.exercises;
        return (
            <>
          <Grid container>
            <Grid item sm>
                <Paper elevation={5} style={styles.Papers}>
                {exercises
                 .map(([group,exercises])=>

                 !this.props.category || this.props.category===group?
                 <Fragment key={group}>
                 <Typography variant='h5' style={{textTransform:'capitalize'}}>
                     {group}
                 </Typography>

                  <List 
                  component="ul"
                   aria-label="secondary mailbox folders"
                   >
                      {exercises.map(({id,title})=>
                          <ListItem 
                          button key={id}
                          onClick={()=>this.selected(id)}
                          >
                          <ListItemText primary={title}/>
                        </ListItem>
                         )}
                </List>
                </Fragment>
                 :null
                
                )}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper elevation={5} style={styles.Papers}>
                {title}
                </Paper>
            </Grid>
          </Grid>
            </>
        );
    }
}

export default Body;