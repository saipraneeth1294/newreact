import React, { Component } from 'react';
import { Box,SwipeableDrawer } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

class SideNav extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Box className='SideNav' >
                Side Nav
                <Drawer 
        // className={classes.drawer}
        variant="persistent"
        anchor="left"
        //open={this.props.open}
       
      > This is the drawer
      </Drawer>
      
            </Box>
        );
    }
}

export default SideNav;