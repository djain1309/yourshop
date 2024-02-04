import { createSlice } from "@reduxjs/toolkit";
// CHANGE STATE TO FALSE
const initialState = {
    isAuthenticate : true
};

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState,
    reducers: {
        authenticate : (state, action) => {
            state.isAuthenticate = true;
            localStorage.setItem('isAuthenticate', true)

        },
        unAuthenticate : (state, action) => {
            state.isAuthenticate = false;
            localStorage.setItem('isAuthenticate', false)
        }
    }
});

export const {authenticate, unAuthenticate} = authenticateSlice.actions;

export default authenticateSlice.reducer;