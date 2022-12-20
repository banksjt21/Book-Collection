/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Books.module.css';
import * as booksAPI from '../../utilities/books-api';
import sendRequest from '../../utilities/send-request';




/*  ===========================================================================
//  BOOKS
//  =======================================================================  */
export default function Books() {

    // sendRequest();

    const [books, setBooks] = useState(null);

    // const retrievedBooks = await booksAPI.getBooks();
    // setBooks(retrievedBooks)
    // console.log(retrievedBooks);

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
                                <h4>{book.title}</h4>
                                <img src={book.image} width="100px" />
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