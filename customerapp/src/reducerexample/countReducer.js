// not a component, it's a reducer function
export default function countReducer(state, action) {
    // action ==> {type : 'INCREMENT', payload: no}
    switch(action.type) {
        case 'INCREMENT':
            // return a new state <<modified state>>
            return {
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count : 0
            }
        default: return state;
    }
}

/*
    {
        type: 'INCREMENT',
        payload: 5
    }
     {
        type: 'DECREMENT'
  }
*/