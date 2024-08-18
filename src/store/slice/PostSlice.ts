import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "../action.ts";

const initialState: AppState = {
    posts: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => ({
            ...state,
            posts: [...state.posts, action.payload],
        }),
        removePost: (state, action: PayloadAction<number>) => ({
            ...state,
            posts: state.posts.filter(post => post.id !== action.payload)
        }),
        changePost: (state, action) => ({
            ...state,
            posts: state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return {
                        ...action.payload
                    }
                } else {
                    return post
                }
            })
        })
    }
})

export const {addPost, changePost, removePost} = postSlice.actions;
export default postSlice.reducer;