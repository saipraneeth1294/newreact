import {combineReducers} from 'redux';
import course from './CourseReducer';

const rootReducer=combineReducers({
    course:course
});

export default rootReducer;