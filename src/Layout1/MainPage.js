import React, { Component } from 'react';
import HeaderPage from './Common/HeaderPage';
import BodyPage from './Common/BodyPage';
import FooterPage from './Common/FooterPage';
import HomePage from './Portal/HomePage';
import ContactPage from './Portal/ContactPage';
import AboutPage from './Portal/AboutPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from '../Layout/SideNav';
import Loading from '../Layout1/Common/Loading';

class MainPage extends Component {
    constructor(){
        super();
        this.state={
            sideNavEnable:false
        };
    }
    onSideNavEnable=(val)=>{
        console.log(val)
        this.setState({sideNavEnable:val});
    };
    render() {
        return (
            <div className='col-sm-12'>
                <Router>
                    <HeaderPage sideNavEnable={this.state.sideNavEnable} onSideNavEnable={this.onSideNavEnable} />
                    <div className='col-sm-2'>
                       
                        <SideNav sideNavEnable={this.state.sideNavEnable}></SideNav>
                    </div>
                    <div className='col-sm-10'>
                        <Switch>

                            <Route exact path='/' component={HomePage}></Route>
                            <Route path='/contact' component={ContactPage}></Route>
                            <Route path='/about' component={AboutPage}></Route>

                        </Switch>
                    </div>
                    <div className='col-sm-10'>
                    <FooterPage />
                    </div>
                </Router>
                <Loading/>
            </div>
        );
    }
}

export default MainPage;