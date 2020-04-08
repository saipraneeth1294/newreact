import React, { Component } from 'react';
import  Body from './Body';
import  Footer from './Footer';
import  Header from './Header';
import  SideNav from './SideNav';
import { Box } from '@material-ui/core';

class MainTesting extends Component {
    render() {
        return (
            <div>
                <Box>
               <Header/>
               </Box>

               <Box>
               <SideNav/>
               </Box>

               <Box>
               <Body/>
               </Box>

               <Box>
               <Footer/>
               </Box>
               
            </div>
        );
    }
}

export default MainTesting;