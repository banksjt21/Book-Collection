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




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function SearchResults() {

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
                value: {thumbnail: ''},
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
            image: selectedBook.volumeInfo.imageLinks.thumbnail
        }
        // console.log(bookData);

        const book = await addBook(bookData);
        navigate('/books');
        console.log(book);
    }



    const loaded = () => {
        return (
            <div>
                <h2>Search Results</h2>
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
                            <div key={i}>
                                <h3>{book.title}</h3>
                                <img src={bookCover} width="100px" />
                                <ul>
                                    {
                                        book.categories.map((category, j) => {
                                            return (
                                                <li key={j}>{category}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <p>{book.publishedDate}</p>
                                <p>{book.description}</p>
                                <p>{book.publisher}</p>
                                <ul>
                                    {
                                        book.authors.map((author, k) => {
                                            return (
                                                <li key={k}>{author}</li>
                                            )
                                        })
                                    }
                                </ul>



                                <form autoComplete="off" onSubmit={handleSubmit}>
                                    <input type="hidden" name="googleBookID" value={googleBookID} />
                                    <input type="submit" value="Add to Collection" />
                                </form>
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
        googleBooks ? loaded() : loading()
    )
}