import React, { Component } from 'react';
import  Body from './Body';
import  Footers from './Footer';
import  Header from './Header';
import  SideNav from './SideNav';
import Func from './Func'
import { makeStyles } from '@material-ui/core/styles';
import{muscles,exercises} from '../Store';

class MainTesting extends Component {
    constructor(){
        super();
        this.state={
            open:false,
            exercises,
            exercise:[]
        }

    }
    getExercisesByMuscles(){
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise
                
                exercises[muscles] = exercises[muscles]
                  ? [...exercises[muscles], exercise]
                  : [exercise]
                  //console.log(exercises)
                return exercises
              }, {})
            )
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
       // console.log('Header clicked');
        var val= this.state.open;
        this.setState({open:!val});
    };
    render() {
        const exercises = this.getExercisesByMuscles()
        return (
            <div>
                
                <Header  headerIconClicked={this.headerIconClicked} myStyles={this.useStyles}/>
               
               <SideNav open={this.state.open}/>

               <Body  exercises={exercises}/>

               <Footers/>
               
            </div>
        );
    }
}

export default MainTesting;