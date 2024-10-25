import { configureStore } from "@reduxjs/toolkit";
import {cartreducers} from './cartSlice';
import {userreducers} from './userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    // root reducer
    reducer: {
        "cart": cartreducers,
        "profile": userreducers
    }
});

// function doTask() {
//     return {
//         name: "A",
//         age: 12,
//         "address": {
//             street: "A",
//             pin: 234232
//         }
//     }
// }

// type TaskType = ReturnType<typeof doTask>

export default store;

// convert JS hooks to TS
export type RootType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
