import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {BooksSlice} from "./books/booksSlice.ts";
import {authReducer} from "./auth/slice.ts";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE, REGISTER,
    REHYDRATE
} from "redux-persist/es/constants";

const rootReducer = combineReducers({
    book: BooksSlice.reducer,
    auth: authReducer,
});
const persistConfig = {
    key: 'auth',
    storage: storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);