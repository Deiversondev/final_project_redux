const INITIAL_STATE = {
    edit: {}
}

const EditReducer = (state = INITIAL_STATE,action) => {
    if (action.type === 'EDIT_PERSON') {
        
        return {
            edit:action.data 
        }
    }
    return state;
    
}
console.log(INITIAL_STATE)

export default EditReducer;