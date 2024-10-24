import { createStore } from 'redux';
import rootReducer from './reducers'; // imports index.js from folder reducers

// configureStore instead of createStore in new API
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;