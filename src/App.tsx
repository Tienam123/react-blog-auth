import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Main from "./pages/Main.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import Contacts from "./pages/Contacts.tsx";
import AddPost from "./pages/AddPost.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Books from "./pages/Books.tsx";
import Book from "./pages/Book.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {refreshUser} from "./store/auth/operation.ts";
import {RestrictedRoute} from "./components/RestrictedRoute.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import {AppDispatch} from "./store/store.ts";


function App() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(refreshUser())
    }, []);

    return (<>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='/login' element={<RestrictedRoute component={<Login/>}/>}/>
                <Route path='/register' element={<RestrictedRoute component={<Register/>}/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<PrivateRoute component={<Blog/>} redirectTo={'/login'}/>}/>
                <Route path='/books' element={<Books/>}/>
                <Route path='/books/:id' element={<Book/>}/>
                <Route path='/blog/add-post' element={<AddPost/>}/>
                <Route path='/blog/:id' element={<Blog/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Route>
        </Routes>
    </>)
}

export default App
