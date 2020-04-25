import * as Type from './actionTypes'
import * as courseApi from '../../api/courseApi';
import * as myApi from '../../api/newApi';

export function createCourse(courses){
    return {type:Type.CREATE_COURSE,course:courses}; 
}
export function loadCoursesSuccess(courses){
    return {type:Type.LOAD_COURSES_SUCCESS,testing:courses};
}
// export function loadCourses(){
//     return function (dispatch){
//         return courseApi.getCourses().then(courses=>{
//             dispatch(loadCoursesSuccess(courses))
//         }).catch(e=>{
//             throw e;
//         })
//     }
//}
export function loadCourses(){
   
        return dispatch=>{
            return myApi.getDetails().then(res=>{
            dispatch(loadCoursesSuccess(res))
        }).catch(e=>console.log(e))
        }
    
}