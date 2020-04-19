import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeadersPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/course'>Course</Link></li>
                </ul>
            </div>
        );
    }
}

export default HeadersPage;