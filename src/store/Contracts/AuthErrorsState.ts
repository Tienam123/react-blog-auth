import {AuthError} from "./AuthError.ts";

export interface AuthErrorsState {
    message: string;
    errors: AuthError
}