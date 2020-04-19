import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../Redux/Actions/CourseAction'
import PropTypes from 'prop-types';

class CoursePage extends Component {
            state={
            course:{
                title:''
            }
        };
    handleChange=(e)=>{
        const course= {...this.state.course,title:e.target.value};
        this.setState({course:course});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course))
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
               {/* {this.props.courses.map(course=>{
                   <div key={course.title}>{course.title}</div>
               })} */}
           </form>
        );
    }
}
CoursePage.propTypes={
    courses:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
};

function mapStateToProps(state,ownProps){
    return{
        courses:state.courses
    }
}
export default connect(mapStateToProps) (CoursePage);