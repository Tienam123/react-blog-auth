import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout, refreshUser, register} from "./operation.ts";
import {AuthState} from "../Contracts/AuthState.ts";
import {AuthErrorsState} from "../Contracts/AuthErrorsState.ts";


const initialState: AuthState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isError: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(register.pending, (state: AuthState) => {
            state.isError = null;
            state.isLoggedIn = false;
        })
            .addCase(register.fulfilled, (state: AuthState, action) => {
                state.user = {
                    name: action.payload.data.name,
                    email: action.payload.data.email
                }
                state.token = action.payload.data.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state: AuthState, action: PayloadAction<AuthErrorsState | undefined>) => {
                    state.isRefreshing = false;
                    state.isError = action.payload ?? null;
                }
            )


        builder.addCase(login.pending, (state: AuthState) => {
            state.isRefreshing = true;
            state.isLoggedIn = false;
        }).addCase(login.fulfilled, (state: AuthState, action) => {
            state.isRefreshing = false;
            state.user = {
                name: action.payload.data.name,
                email: action.payload.data.email
            }
            state.token = action.payload.data.token;
            state.isLoggedIn = true;
        }).addCase(login.rejected, (state: AuthState, action: PayloadAction<AuthErrorsState | undefined>) => {
            state.isRefreshing = false;
            state.isError = action.payload ?? null
        })

        builder.addCase(logout.pending, (state: AuthState) => {
            state.isRefreshing = true;
        }).addCase(logout.fulfilled, (state: AuthState) => {
            state.isRefreshing = false;
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLoggedIn = false;
        }).addCase(logout.rejected, (state: AuthState) => {
            state.isRefreshing = false;
        })

        builder.addCase(refreshUser.pending, (state: AuthState) => {
            state.isRefreshing = true;
            state.isError = null;
        }).addCase(refreshUser.fulfilled, (state: AuthState, action) => {
            state.isRefreshing = false;
            state.isLoggedIn = true;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
        }).addCase(refreshUser.rejected, (state: AuthState) => {
            state.isRefreshing = false;
        })
    }
})
export const authReducer = authSlice.reducer