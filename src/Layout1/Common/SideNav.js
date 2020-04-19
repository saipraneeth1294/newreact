import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div >
                <ul>
                    <li><Link to='/contact'>Home</Link></li>
                </ul>
                
            </div>
        );
    }
}

export default SideNav;