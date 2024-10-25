import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState :{"avatar": "image.png", "name": "Peter"},
    reducers: {
    }
})

export const userreducers = userSlice.reducer;