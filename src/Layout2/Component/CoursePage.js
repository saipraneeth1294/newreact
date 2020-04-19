import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../Redux/Actions/CourseAction'
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';

class CoursePage extends Component {
    constructor(props){
        super(props);
        this.state={
            course:{
                title:''
            }
        };
    }
           
    handleChange=(e)=>{
        const course= {...this.state.course,title:e.target.value};
        
        this.setState({course:course});
        

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // mapDispatchToProps 1st way
        //this.props.createCourse(this.state.course);
        //2 nd way
        this.props.actions.createCourse(this.state.course);

    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <h2>Courses</h2>
               <h3>Add Courses</h3>
               <input type='text'
                 onChange={this.handleChange} 
                    value={this.state.course.title}/>
               <input type='submit' value='Save'/>
               { this.props.courses.map(course=>{
               return <div key={course.title}>{course.title}</div>}
                )}
           </form>
        );
    }
}
CoursePage.propTypes={
   courses:PropTypes.array.isRequired,
   actions:PropTypes.object.isRequired
};

function mapStateToProps(state){
    return{
        courses:state.courses
    }
}
function mapDispatchToProps(dispatch){
    // 1st way
    // return{
    //     createCourse: course=> dispatch(courseActions.createCourse(course))
    // }
    //2 nd way
    return {
        actions:bindActionCreators(courseActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CoursePage);