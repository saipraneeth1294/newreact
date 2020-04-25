import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../Redux/Actions/CourseAction'
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';
import ChildCoursePage from './ChildCoursePage';

class CoursePage extends Component {
    constructor(props){
        super(props);
        this.state={
            course:{
                title:''
            },
            items:[1]
        };
    }
        componentDidMount(){
            // this.props.actions.loadCourses().catch(error=>{
            //     alert("Error");
            // })
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
        console.log(this.props)
        return (
          <form onSubmit={this.handleSubmit}>
               <h2>Courses</h2>
               <input type='text' onChange={this.handleChange} value={this.state.course.title}/>
               <input type='submit' value='Save' />               
               { this.props.courses.map(course=>{
               return <div key={course.title}>{course.title}</div>}
                )}

                {/* {this.state.items.map(item=>
                   <ChildCoursePage key={item}/>
                )} */}
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
        courses:state.courses,
      
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