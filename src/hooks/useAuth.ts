import {useSelector} from "react-redux";
import {selectIsLogin, selectIsRefreshing, selectUser} from "../store/auth/selectors.ts";


export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLogin),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser)
    }
}