import {State} from "../Contracts/State.ts";

export const selectUser = (state: State) => state.auth.user;
export const selectIsLogin = (state: State) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: State) => state.auth.isRefreshing;

export const selectErrors = (state: State) => state.auth.isError;