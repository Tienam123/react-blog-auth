import * as BookShelfAPI from '../../service/bookshelf-api.ts';
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchBooks = () => async (dispatch: (arg0: { payload: string | undefined; type: string; }) => void) => {
//     dispatch(booksActions.fetchBooksRequest())
//     try {
//         const books = await BookShelfAPI.fetchBooks();
//         dispatch(booksActions.fetchBooksSuccess(books))
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             dispatch(booksActions.fetchBooksError(error.message))
//         }
//     }
// }


export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (_, {rejectWithValue}) => {

        try {
            const books = BookShelfAPI.fetchBooks();
            return books;
        } catch (error) {
            rejectWithValue(error)
        }
    }
);

export const fetchBookById = createAsyncThunk(
    'book/fetchBookById',
    async (id: string | undefined, {rejectWithValue}) => {
        try {
            const book = await BookShelfAPI.fetchBookById(id);
            return book;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

