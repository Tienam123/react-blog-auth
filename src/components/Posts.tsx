import {useDispatch, useSelector} from "react-redux";
import {AppState, Post} from "../store/action.ts";
import {removePost} from "../store/slice/PostSlice.ts";

const Posts = () => {
    const posts: Post[] = useSelector((state:AppState) => state);
    const dispatch = useDispatch();
    ;
    return (
        <ul className='mt-5'>
            {/*{posts.map(el => <li*/}
            {/*    className='p-3 border flex justify-between items-center border-solid border-teal-700 mb-5' key={el.id}*/}
            {/*>*/}
            {/*    <div className='px-2'>*/}
            {/*        <p className='font-semibold'>{el.title}</p>*/}
            {/*        <p>{el.body}</p>*/}
            {/*    </div>*/}
            {/*    <button*/}
            {/*        className='bg-teal-700 py-2 px-3 text-white rounded'*/}
            {/*        onClick={() => dispatch(removePost(el.id))}*/}
            {/*    >Delete*/}
            {/*    </button>*/}
            {/*</li>)}*/}
        </ul>
    );
};
export default Posts