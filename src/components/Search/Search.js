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
        <div>
            <div>
                <div>
                    {/* <h2>Search</h2> */}
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Search Terms&nbsp;(required)</label>
                        <input type="text" name="searchTerms" onChange={handleChange} autoFocus required />
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleChange} />
                        <label>Author</label>
                        <input type="text" name="author" onChange={handleChange} />
                        <label>Publisher</label>
                        <input type="text" name="publisher" onChange={handleChange} />
                        <label>Subject</label>
                        <input type="text" name="subject" onChange={handleChange} />
                        <label>ISBN</label>
                        <input type="text" name="isbn" onChange={handleChange} /><br />
                        <button type="submit" ><i className="fa-solid fa-magnifying-glass marginRight10"></i><span>Search for Book</span></button>
                    </form>
                </div>
            </div>

            {/* <div className='splitPage'>
                <div className='overlay'></div>
            </div> */}

        </div>

    )
}