import { combineReducers } from "redux";
import userReducer from "./userReducer";
import contactReducer from "./contactReducer";

// root reducer
const rootReducer = combineReducers({
    "profile": userReducer,
    "contacts": contactReducer
})

export default rootReducer;

// state in store
/*
    {
        "profile": {"avatar":"sample.png", "name": "Guest"},
        "contacts": []
    }

*/