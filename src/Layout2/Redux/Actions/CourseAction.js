import * as Type from './actionTypes'

export function createCourse(course){
    return {type:Type.CREATE_COURSE,course:course}; 
}