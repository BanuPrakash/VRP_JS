export default function contactReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            // don't do this state.push(action.payload)
            // return a cloned one
            return [...state, action.payload]
        case 'REMOVE_CONTACT':
            return state.filter(user => user.email !== action.payload);
        case 'CLEAR_CONTACTS':
            return [];
        default:
            return state;
    }
}