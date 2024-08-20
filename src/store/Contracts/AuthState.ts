import {User} from "./User.ts";
import {AuthErrorsState} from "./AuthErrorsState.ts";

export interface AuthState {
    user: User;
    token: string | null;
    isLoggedIn: boolean
    isRefreshing: boolean
    isError: AuthErrorsState | null
}
