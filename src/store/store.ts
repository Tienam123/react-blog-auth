import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postSlice from "./slice/PostSlice.ts";

const rootReducer = combineReducers({
    posts: postSlice
})


export const store = configureStore({
reducer:rootReducer
});