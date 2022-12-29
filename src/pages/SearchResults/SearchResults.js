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
import Books from '../Books/Books';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function SearchResults() {

    const location = useLocation();


    const [googleBooks, setGoogleBooks] = useState(location.state.searchResults.items);

    console.log(googleBooks);

    const loaded = () => {
        return (
            <div>
                <h2>Search Results</h2>
                {
                    googleBooks.map((book, i) => {

                        let googleBookID = book.id;
                        console.log(googleBookID);

                        book = book.volumeInfo;

                        //  Handle results that are missing information
                        let bookCover;
                        if(book.imageLinks) {
                            bookCover = book.imageLinks.thumbnail;
                        } else {
                            bookCover = '/book-cover-placeholder.png'
                        }
                        
                        book.categories           = book.categories || ["No Category"];
                        book.publishedDate        = book.publishedDate || "No Year";
                        book.description          = book.description || "No Description";
                        book.publisher            = book.publisher || "No Publisher";
                        book.authors              = book.authors || ["No Author"];



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