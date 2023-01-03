/*  ===========================================================================
//  Search.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchForBook } from '../../utilities/books-api-search';
import styles from './Search.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function Search() {
    const navigate = useNavigate();

    const [googleBooks, setGoogleBooks] = useState(null);

    const [formData, setFormData] = useState({
        searchTerms: "",
        title: "",
        author: "",
        publisher: "",
        subject: "",
        isbn: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const books = await searchForBook(formData);
        setGoogleBooks(books);

        // console.log(books);

    }

    const goToResults = () => {
        navigate('/books/results', {
            state: {
                searchResults: googleBooks
            }
        });
    }

    useEffect(() => {
        if (googleBooks) {
            goToResults();
        }
    }, [googleBooks])


    return (
        <main>
            <div className="splitPage">
                <div>
                    <h2>Search</h2>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Search Terms</label><br />
                        <input type="text" name="searchTerms" onChange={handleChange} required /><br />
                        <label>Title</label><br />
                        <input type="text" name="title" onChange={handleChange} /><br />
                        <label>Author</label><br />
                        <input type="text" name="author" onChange={handleChange} /><br />
                        <label>Publisher</label><br />
                        <input type="text" name="publisher" onChange={handleChange} /><br />
                        <label>Subject</label><br />
                        <input type="text" name="subject" onChange={handleChange} /><br />
                        <label>ISBN</label><br />
                        <input type="text" name="isbn" onChange={handleChange} /><br />
                        <input type="submit" value="Search for Book" />
                    </form>
                </div>
            </div>

            <div className='splitPage'>
                <div className='overlay'></div>
            </div>

        </main>

    )
}