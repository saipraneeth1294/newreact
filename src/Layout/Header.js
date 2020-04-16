import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Box,Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box className='Header'>
                <AppBar className={this.props.myStyles.AppBar} position='static' style={{ zIndex: '1201' }}>
                    <Toolbar>
                        <IconButton edge="start" className='IconButton' color="inherit" aria-label="menu" onClick={this.props.headerIconClicked}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className='Typo1'>
                            My Application
                        </Typography>
                    </Toolbar>
                    <Typography variant="h6" className='Typo1' color='textSecondary'>
                           Home
                        </Typography>
                        <Typography variant="h6" className='Typo1' color='inherit'>
                           Contacts
                        </Typography>
                </AppBar>
            </Box>
        );
    }
}

export default Header;