/*  ===========================================================================
//  SearchResults.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../utilities/books-api';
import styles from './SearchResults.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function SearchResults({ user, setUser }) {

    const navigate = useNavigate();
    const location = useLocation();


    const [googleBooks, setGoogleBooks] = useState(location.state.searchResults.items);

    // console.log(googleBooks);



    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(event);

        const selectedID = event.target.googleBookID.value;
        // console.log(selectedID);

        const selectedBook = googleBooks.find(theBook => theBook.id === selectedID);
        // console.log(selectedBook);

        // Some search results do not have the imageLinks property ...
        if (selectedBook.volumeInfo.imageLinks === undefined) {
            console.log(selectedBook.imageLinks)
            Object.defineProperty(selectedBook.volumeInfo, 'imageLinks', {
                value: { thumbnail: '' },
                writable: true
            });
        }

        //  Prepare data to be sent to server
        const bookData = {
            title: selectedBook.volumeInfo.title,
            author: selectedBook.volumeInfo.authors.toString() || "No Author",
            description: selectedBook.volumeInfo.description || "No Description",
            year: selectedBook.volumeInfo.publishedDate || "No Date",
            category: selectedBook.volumeInfo.categories.toString() || "No Category",
            image: selectedBook.volumeInfo.imageLinks.thumbnail,
            userID: user._id
        }
        // console.log(bookData);

        const book = await addBook(bookData);
        navigate('/books');
        console.log(book);
    }



    const loaded = () => {

        const backImage = {
            backgroundImage: "url(/images/bookshelf-1-bw-faded.png)",
            backgroundPosition: '25% 35%',
            backgroundRepeat: 'none',
            backgroundAttachment: 'fixed'
        }

        const bookImage = {
            // backgroundImage: `url(${book.image})`,
            // backgroundSize: 'cover'
        }

        return (
            <main style={backImage} id={styles.searchResults} >
                <div className="splitPage mainPadding">
                    <div>
                        <h2>Search Results</h2>
                        <p className='mainSubtitle'>Here are the book(s) that match your search</p>
                        {
                            googleBooks.map((book, i) => {

                                let googleBookID = book.id;
                                // console.log(googleBookID);

                                book = book.volumeInfo;

                                //  Handle results that are missing information
                                let bookCover;
                                if (book.imageLinks) {
                                    bookCover = book.imageLinks.thumbnail;
                                } else {
                                    bookCover = '/book-cover-placeholder.png'
                                }

                                book.categories = book.categories || ["No Category"];
                                book.publishedDate = book.publishedDate || "No Year";
                                book.description = book.description || "No Description";
                                book.publisher = book.publisher || "No Publisher";
                                book.authors = book.authors || ["No Author"];



                                return (
                                    <>
                                        <div className={styles.resultBook} key={i}>

                                            <img src={bookCover} width="100px" />

                                            <div className={styles.resultBookDetails}>
                                                <h3>{book.title}</h3>
                                                <ul>
                                                    {
                                                        book.authors.map((author, k) => {
                                                            return (
                                                                <li key={k}>{author}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p>{book.description.substring(0, 260)}...</p>
                                                {/* <ul>
                                                {
                                                    book.categories.map((category, j) => {
                                                        return (
                                                            <li key={j}>{category}</li>
                                                        )
                                                    })
                                                }
                                                </ul> */}
                                                {/* <p>{book.publishedDate}</p> */}
                                                {/* <p>{book.publisher}</p> */}
                                            </div>


                                        </div>

                                        <form autoComplete="off" onSubmit={handleSubmit}>
                                            <input type="hidden" name="googleBookID" value={googleBookID} />
                                            <input type="submit" value="Add to Collection" />
                                        </form>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>

                <div className='splitPage'>
                    <div className='overlay'></div>
                </div>

            </main>
        )
    }



    const loading = () => {
        <p>Loading ...</p>
    }

    return (
        googleBooks ? loaded() : loading()
    )
}