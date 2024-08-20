// import {combineReducers, createReducer} from "@reduxjs/toolkit";
// import * as booksActions from './booksActions.ts'
// import {fetchBooks} from "./booksOperations.ts";
//
// const bookReducer = createReducer([], builder => {
//     builder.addCase(fetchBooks.fulfilled, (_state, action) => action.payload)
// })
// const isLoading = createReducer(false, builder => {
//     builder.addCase(fetchBooks.pending, (_state) => true)
//     builder.addCase(fetchBooks.fulfilled, (_state) => false)
//     builder.addCase(fetchBooks.rejected, (_state) => false)
// })
// const isError = createReducer(null, builder => {
//     // @ts-ignore
//     builder.addCase(fetchBooks.rejected, (_state: string, action) => action.payload)
// })
//
// export const booksReducer = combineReducers({
//     entities: bookReducer,
//     isLoading,
//     isError
// })