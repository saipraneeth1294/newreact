import * as Type from '../Actions/actionTypes'

export default function CourseReducer(state=[],action) {
    switch(action.type){
        
        case Type.CREATE_COURSE:
            return [...state,{...action.course}];
            default:
                return state 
    };
}