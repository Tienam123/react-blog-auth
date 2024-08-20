import axios, {AxiosError} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthErrorsState} from "../Contracts/AuthErrorsState.ts";

axios.defaults.baseURL = 'http://localhost';
axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';


const csrf = () => axios.get('sanctum/csrf-cookie');
const setAuthHeader = (token: string) => {

    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk<any, any, { rejectValue: AuthErrorsState }>(
    'auth/register',
    async (credentials, {rejectWithValue}) => {
        try {
            await csrf();
            const {data} = await axios.post('/register', credentials);
            setAuthHeader(data.data.token)
            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) return rejectWithValue(error.response.data as AuthErrorsState)
            }
        }
    }
);
export const login = createAsyncThunk<any, any, { rejectValue: AuthErrorsState }>(
    'auth/login',
    async (credentials, {rejectWithValue}) => {
        try {
            await csrf();
            const {data} = await axios.post('/login', credentials)
            setAuthHeader(data.data.token)
            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) return rejectWithValue(error.response.data as AuthErrorsState)
            }
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            await axios.post('/logout');
            clearAuthHeader();
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) return rejectWithValue(error.response.data as AuthErrorsState)
            }
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        // @ts-ignore
        const state: { auth: AuthState } = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue(null);
        }

        try {
            setAuthHeader(persistedToken);
            const res = await axios.post('/me');
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) return thunkAPI.rejectWithValue(error.response.data)
            }
        }
    }
)
