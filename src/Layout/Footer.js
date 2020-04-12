import React, { Component } from 'react';
import { Box, Container, Grid, AppBar, Paper, Tabs,Tab } from '@material-ui/core';


class Footers extends Component {
  constructor(props){
    super(props);
  }
  onChangeCat=(e,index)=>{
    this.props.onSelected(index===0?'':this.props.muscles[index-1])
  };
  render() {
    const index= this.props.category?
         this.props.muscles.findIndex(val=>val===this.props.category)+1 
         :0
    return (
      <>
     
       
        <Paper >
         <Tabs
          value={index}
          onChange={this.onChangeCat}
          indicatorColor='primary'
          textColor='primary'
          centered
         >
            <Tab label='All'/>
                {this.props.muscles.map((group)=>
                <Tab label={group} key={group}></Tab>
                )}
            
         </Tabs>
         </Paper>
        
        
      </>
    );
  }
}

export default Footers;