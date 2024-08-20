import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as bookOperations from '../store/books/booksOperations.ts'

export default function Books() {
    const dispatch = useDispatch();
    // @ts-ignore
    const books = useSelector(state => state.book.entities);
    useEffect(() => {
        // @ts-ignore
        dispatch(bookOperations.fetchBooks())
    }, []);
    return (
        <>
            {books.length > 0 && (
                <ul>
                    {books.map((book: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                        <li key={book.id}>
                            <Link to={`/books/${book.id}`}
                            >
                                {book.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}