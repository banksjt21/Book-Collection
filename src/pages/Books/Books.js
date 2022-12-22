/*  ===========================================================================
//  Books.js
//  ===========================================================================
//  - Displays all of the books
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as booksAPI from '../../utilities/books-api';
import styles from './Books.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function Books() {

    const [books, setBooks] = useState(null);

    const getBooks = async () => {
        const retrievedBooks = await booksAPI.getBooks();
        setBooks(retrievedBooks);
    }

    useEffect(() => {
        getBooks();
    }, [])


    const loaded = () => {
        return (
            <div>
                <h2>Books - Index</h2>
                {
                    books.map((book, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/books/q/${book._id}`}><h4>{book.title}</h4></Link>
                                <img src={book.image || '/book-cover-placeholder.png'} width="100px" />
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
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const loading = () => {
        <p>Loading ...</p>
    }

    return (
        books ? loaded() : loading()
    )
}