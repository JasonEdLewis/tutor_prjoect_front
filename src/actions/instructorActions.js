import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR } from './types';


export const fetchInstructors = () => {

    return function (dispatch) {
       
        fetch('http://localhost:3000/instructors/')
            .then(resp => resp.json())
            .then(instructors => dispatch({
                type: FETCH_INSTRUCTORS,
                payload: instructors
            }))
    }
}


export const createInstructor =(instructData)=>{
    return function(dispatch) {
fetch('http://localhost:3000/instructors/', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
    },
    body: JSON.stringify(instructData)
}).then(resp => resp.json())
  .then(instructor => dispatch({
    type: NEW_INSTRUCTOR,
    payload: instructor
}))
    }
}

export const deleteInstructor =(id)=>{
    return function(dispatch){
    fetch('http://localhost:3000/instructors/:id', {
        method: 'DELETE'
    })
    dispatch({
        type: DELETE_INSTRUCTOR,
        payload: id
    })
}
}