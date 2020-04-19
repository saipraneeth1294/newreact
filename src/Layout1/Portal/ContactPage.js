import React, { Component } from 'react';

class ContactPage extends Component {
    componentWillUnmount(){
        console.log("unmounted");
    }
    render() {
        return (
            <div>
                ContactPage
            </div>
        );
    }
}

export default ContactPage;