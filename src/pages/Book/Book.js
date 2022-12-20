/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { Link }      from 'react-router-dom';
import * as booksAPI from '../../utilities/books-api';




/*  ===========================================================================
//  BOOK
//  =======================================================================  */
export default function Book() {

    const [book, setBook] = useState(null);

    const { id } = useParams();
    console.log(id);

    const getBook = async () => {
        const retrievedBook = await booksAPI.showBook(id);
        setBook(retrievedBook[0]);
    }

    useEffect(() => {
        getBook();
    }, [])


    const loaded = () => {
        return (
            <div>
                <h2>{book.title}</h2>
                <img src={book.image} width="100px" />
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