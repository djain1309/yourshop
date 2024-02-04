import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./counter/authenticationSlice";

export const store = configureStore({
    reducer: {
        authenticate : authenticateReducer
    }
});
