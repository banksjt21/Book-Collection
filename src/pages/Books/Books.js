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
export default function Books({ user, setUser }) {

    const [books, setBooks] = useState(null);

    const getBooks = async () => {
        const retrievedBooks = await booksAPI.getBooks();
        setBooks(retrievedBooks);
    }

    useEffect(() => {
        getBooks();
    }, [])


    const loaded = () => {

        const backImage = {
            backgroundImage: "url(/images/bookshelf-1-bw-faded.png)",
            backgroundPosition: '25% 35%',
            backgroundRepeat: 'none',
            backgroundAttachment: 'fixed'
        }

        return (
            <main style={backImage}>
                <div id={styles.collection}>
                    <h2>Collection</h2>
                    <p className='mainSubtitle'>Keep track of all your books</p>
                    <span className={styles.collectionInfo}>{books.length} Books</span>
                    <div id={styles.allBooks}>
                        {
                            books.map((book, i) => {
                                return (
                                    <span className={styles.book} key={i}>
                                        {/* <Link to={`/books/q/${book._id}`}><h4>{book.title}</h4></Link> */}
                                        <Link to={`/books/q/${book._id}`}><img src={book.image || '/images/book-cover-placeholder.png'} alt={book.title} title={book.title} /></Link>
                                        {/* <p>{book.description}</p>
                                        <ul>
                                            {
                                                book.author.map((name, j) => {
                                                    return (
                                                        <li key={j}>{name}</li>
                                                    )
                                                })
                                            }
                                        </ul> */}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>

            </main>
        )
    }

    const loading = () => {
        <p>Loading ...</p>
    }

    return (
        books ? loaded() : loading()
    )
}