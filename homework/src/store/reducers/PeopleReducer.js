const INITIAL_STATE = {
    person: []
}

const PeopleReducer = (state = INITIAL_STATE,action) => {
    
    if (action.type === 'SET_PEOPLE') {
        return {
            person:action.data
        }
    }
    return state;
}

export default PeopleReducer;