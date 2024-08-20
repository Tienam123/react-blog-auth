import {Link} from "react-router-dom";
import Posts from "../components/Posts.tsx";
import {useEffect} from "react";
import axios from "axios";

const Blog = () => {
    useEffect(() => {
    }, []);
    return (

        <div className='px-2'>
            <h1 className="text-center my-3">Blog</h1>
            <Link to='add-post' className='py-2 px-3 bg-teal-700 text-white rounded'>Добавить пост</Link>
            <Posts />
        </div>
    );
};
export default Blog;