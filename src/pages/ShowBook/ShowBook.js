/*  ===========================================================================
//  ShowBook.js
//  ===========================================================================
//  - Displays the details for the book selected on 'Books' page
//  - Provides buttons to allow the book to be edited or deleted
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as booksAPI from '../../utilities/books-api';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function Book() {

    const [book, setBook] = useState(null);

    const { id } = useParams();
    console.log(id);

    const getBook = async () => {
        const retrievedBook = await booksAPI.showBook(id);
        console.log(retrievedBook)
        setBook(retrievedBook);
    }

    useEffect(() => {
        getBook();
    }, [])

    console.log(book);

    const navigate = useNavigate();

    const handleDelete = async () => {
        await booksAPI.deleteBook(id);
        navigate('/books');
    }

    const loaded = () => {
        return (
            <div>
                <h2>{book.title}</h2>
                <p>{book._id}</p>
                <img src={book.image || '/book-cover-placeholder.png'} width="100px" />
                <p>{book.category}</p>
                <p>{book.year}</p>
                <p>{book.description}</p>
                <ul>
                    {
                        book.author.map((name, j) => {
                            return (
                                <li key={j}>{name}</li>
                            )
                        })
                    }
                </ul>
                <Link to={`/books/q/${book._id}/edit`}><button>Edit</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }

    const loading = () => {
        <p>Loading ...</p>
    }

    return (
        book ? loaded() : loading()
    )
}