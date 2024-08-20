import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchBooks} from "./booksOperations.ts";

interface BookState {
    entities: Book[],
    isLoading: boolean,
    isError: string | null
}

interface Book {
    id: string,
    imgUrl: string,
    title: string,
    description: string,
    genre: string,
    authorId?: number
}

const initialState: BookState = {
    entities: [],
    isLoading: false,
    isError: null,
}

export const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.isLoading = true;
            state.isError = null
        }).addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
            state.isLoading = false;
            state.entities = action.payload
        }).addCase(fetchBooks.rejected, (state, action) => {
            state.isError = action.payload as string || 'Произощла ошибка'
        })
    }
});

export default BooksSlice.reducer