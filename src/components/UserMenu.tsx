import {useAuth} from "../hooks/useAuth.ts";
import {useDispatch} from "react-redux";
import {logout} from "../store/auth/operation.ts";

const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    return (
        <div className='flex items-center gap-3'>
            <p>Добро пожаловать, {user.name}</p>
            <button onClick={() => dispatch(logout())} className='px-3 py-2 bg-slate-600 hover:bg-slate-600 transition-all'>Выйти</button>
        </div>
    );
};
export default UserMenu