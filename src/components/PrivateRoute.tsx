import {useAuth} from "../hooks/useAuth.ts";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({component, redirectTo}) => {
    const {isRefreshing, isLoggedIn} = useAuth();
    const shouldRedirect = isLoggedIn === false && isRefreshing === false;
    console.log(shouldRedirect)
    return shouldRedirect ? <Navigate to={redirectTo}/> : component;
};
export default PrivateRoute