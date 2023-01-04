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
import styles from './ShowBook.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function Book() {

    const [book, setBook] = useState(null);

    const { id } = useParams();
    // console.log(id);

    const getBook = async () => {
        const retrievedBook = await booksAPI.showBook(id);
        // console.log(retrievedBook)
        setBook(retrievedBook);
    }

    useEffect(() => {
        getBook();
    }, [])

    // console.log(book);

    const navigate = useNavigate();

    const handleDelete = async () => {
        await booksAPI.deleteBook(id);
        navigate('/books');
    }

    const loaded = () => {

        const backImage = {
            backgroundImage: "url(/images/bookshelf-1-bw-faded.png)",
            backgroundPosition: '25% 35%',
            backgroundRepeat: 'none',
            backgroundAttachment: 'fixed'
        }

        const bookImage = {
            backgroundImage: `url(${book.image})`,
            backgroundSize: 'cover'
        }

        return (
            <main style={backImage} id={styles.showBook}>
                <div id={styles.bookDetails} className="mainPadding">
                    <div>
                        <h2><Link className='backArrow' to={`/books/`} ><span>‹</span></Link>{book.title}</h2>
                        {/* <p>{book._id}</p> */}
                        <ul>
                            {
                                book.author.map((name, j) => {
                                    return (
                                        <li key={j}>{name}</li>
                                    )
                                })
                            }
                        </ul>
                        <img src={book.image || '/book-cover-placeholder.png'} title={book.title} />
                        <p>{book.category}</p>
                        <p>{book.year}</p>
                        <p className={styles.description}>{book.description}</p>

                        <div className='buttonGroup'>
                            <Link to={`/books/q/${book._id}/edit`}><button><i className="fa-solid fa-pen marginRight10"></i><span>Edit</span></button></Link>
                            <button onClick={handleDelete}><i className="fa-solid fa-trash marginRight10"></i><span>Delete</span></button>
                        </div>
                    </div>

                </div>

                <div id={styles.bookImage} style={bookImage}>
                    <div className='overlay'></div>
                </div>
            </main>
        )
    }

    const loading = () => {
        <p>Loading ...</p>
    }

    return (
        book ? loaded() : loading()
    )
}