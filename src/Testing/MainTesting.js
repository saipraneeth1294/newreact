import React, { Component } from 'react';
import  Body from './Body';
import  Footers from './Footer';
import  Header from './Header';
import  SideNav from './SideNav';
import Func from './Func'
import { makeStyles } from '@material-ui/core/styles';

class MainTesting extends Component {
    constructor(){
        super();
        this.state={
            open:false,
        }

    }
     
     useStyles = makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
          },
          drawer: {
            width: 240,
            flexShrink: 0,
          },
    }));
    headerIconClicked=()=>{
        console.log('Header clicked');
        this.setState({open:true});
    };
    render() {
        return (
            <div>
                
                <Header  headerIconClicked={this.headerIconClicked} myStyles={this.useStyles}/>
               
               {/* <SideNav open={this.state.open}/> */}
               <Func></Func>

               <Body/>

               <Footers/>
               
            </div>
        );
    }
}

export default MainTesting;