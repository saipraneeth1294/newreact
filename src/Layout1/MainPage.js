import React, { Component } from 'react';
import HeaderPage from './Common/HeaderPage';
import BodyPage from './Common/BodyPage';
import FooterPage from './Common/FooterPage';
import HomePage from './Portal/HomePage';
import ContactPage from './Portal/ContactPage';
import AboutPage from './Portal/AboutPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Router>
                   <HeaderPage/>
               {/* <BodyPage/>*/}
                
                
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route  path='/contact' component={ContactPage}></Route>
                    <Route path='/about' component={AboutPage}></Route>
              
                </Switch>
                
                <FooterPage/> 
                </Router>
            </div>
        );
    }
}

export default MainPage;