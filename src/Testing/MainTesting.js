import React, { Component } from 'react';
import  Body from './Body';
import  Footer from './Footer';
import  Header from './Header';
import  SideNav from './SideNav';

class MainTesting extends Component {
    render() {
        return (
            <div>
               <Header/>
               <SideNav/>
               <Body/>
               <Footer/>
            </div>
        );
    }
}

export default MainTesting;