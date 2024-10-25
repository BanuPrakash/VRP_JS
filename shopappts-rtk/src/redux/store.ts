import { configureStore } from "@reduxjs/toolkit";
import {cartreducers} from './cartSlice';
import {userreducers} from './userSlice';

const store = configureStore({
    // root reducer
    reducer: {
        "cart": cartreducers,
        "profile": userreducers
    }
});