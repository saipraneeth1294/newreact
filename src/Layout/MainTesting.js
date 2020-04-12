import React, { Component } from 'react';
import Body from './Body';
import Footers from './Footer';
import Header from './Header';
import SideNav from './SideNav';
import Func from './Func'
import { makeStyles } from '@material-ui/core/styles';
import { muscles, exercises } from '../Store';

class MainTesting extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            exercise: {},
            exercises,
            category: ''
        }

    }
    getExercisesByMuscles() {
        //this.setState({exercises:exercises})
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise]
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
    headerIconClicked = () => {
        var val = this.state.open;
        this.setState({ open: !val });
    };

    handleCategorySelected = (val) => {
        this.setState({
            category: val
        })
    };
    handleExerciseChange = (id) => {
        this.setState((prevState) => {
            exercise: prevState.exercises.find(ex => ex.id === id)
        },()=>{console.log(this.state.exercise)})

    };
    render() {
        const exercises = this.getExercisesByMuscles()

        return (
            <div>

                <Header headerIconClicked={this.headerIconClicked}
                    myStyles={this.useStyles} />

                <SideNav open={this.state.open} />

                <Body exercises={exercises}
                    category={this.state.category}
                    handleExerciseChange={this.handleExerciseChange}
                    exercise={this.state.exercise} />

                <Footers muscles={muscles}
                    onSelected={this.handleCategorySelected}
                    category={this.state.category} />

            </div>
        );
    }
}

export default MainTesting;