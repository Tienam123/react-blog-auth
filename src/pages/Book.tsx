import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as BookshelfAPI from '../service/bookshelf-api.ts';
import {useDispatch} from "react-redux";

export interface BookInterface {
    id: number,
    title: string,
    imgUrl: string,
    descr: string,
    author: {
        name: string
    }
}

const Book = () => {
    const {id} = useParams<{ id: string }>();
    useDispatch();
    const [book, setBook] = useState<BookInterface | null>();
    useEffect(() => {
        BookshelfAPI.fetchBookById(id).then(res => setBook(res));
    }, []);
    return (
        <>
            {book && (
                <>
                    <Link to={'/books'}>Назад</Link>
                    <hr/>
                    <img src={book?.imgUrl} alt={book.title}/>
                    <h2>{book?.title}</h2>
                    {/*<p>Автор: {book?.author.name}</p>*/}
                    <p>{book?.descr}</p>
                </>
            )}
        </>
    );
};
export default Book