import React, { Component } from 'react';
import AppBar  from '@material-ui/core/AppBar';
import { Toolbar,IconButton   } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    render() {
        return (
           <>
           <AppBar className='Appbar'>
               <Toolbar>
               <IconButton edge="start" className='IconButton' color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
               </Toolbar>
               
           </AppBar>
           </>
        );
    }
}

export default Header;