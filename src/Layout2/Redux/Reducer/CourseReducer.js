import * as Type from '../Actions/actionTypes';
import initialState from '../InitialState';

let initialValue={
    courses:[],
    testing:{
        "testing":"123"
    }
  }
export default function CourseReducer(state=[],action) {
    switch(action.type){
        
        case Type.CREATE_COURSE:
            debugger;
            return [...state,{...action.course}];
            case Type.LOAD_COURSES_SUCCESS:
                debugger;
                return action.testing;
            default:
                return state 
    };
}