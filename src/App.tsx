import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Main from "./pages/Main.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import Contacts from "./pages/Contacts.tsx";
import AddPost from "./pages/AddPost.tsx";

function App() {
    return (<>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog/add-post' element={<AddPost />} />
                <Route path='/blog/:id' element={<Blog/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Route>
        </Routes>
    </>)
}

export default App
