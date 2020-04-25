import React,{Component} from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../Redux/Actions/CourseAction'
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';

class ChildCoursePage extends Component {
    componentDidMount(){
        console.log(this.props.actions.loadCourses().catch(er=>console.log(er)));
    }
    render(){
    return (
        <div>
            child page
        </div>
    );
    }
}
function mapStateToProps(state){
    return{
        courses:state.courses
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(courseActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildCoursePage);