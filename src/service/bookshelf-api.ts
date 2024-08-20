import axios from 'axios';

export async function fetchAuthors() {
    const {data} = await axios.get(`/authors?_embed=books`);
    return data;
}

export async function fetchBooks() {
    const {data} = await axios.get(`http://localhost:3000/books`);
    return data;
}

export async function fetchBookById(bookId: string | undefined) {
    const {data} = await axios.get(`/books/${bookId}?_expand=author`);
    return data;
}