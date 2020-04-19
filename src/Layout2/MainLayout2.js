import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursePage from './Component/CoursePage';
import HeaderPage from './Common/HeadersPage'
import Home from './Component/Home';

class MainLayout2 extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <HeaderPage/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/Course' component={CoursePage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainLayout2;