/*  ===========================================================================
//  AddBook.js
//  ===========================================================================
//  - Allows the user to enter details for a new book into a form
//  - Upon submission, the info is stored into the database
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import { addBook } from '../../utilities/books-api';
import { useNavigate } from 'react-router-dom';
import styles from './AddBook.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function AddBook({ user, setUser }) {
    const navigate = useNavigate();
    // console.log(user)

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        year: "",
        category: "",
        image: "",
        userID: user._id
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const book = await addBook(formData);
        navigate('/books');
        console.log(book);
    }


    return (
        <div>
            <div>
                <div>
                    {/* <h2>Add a New Book</h2> */}
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleChange} autoFocus required />
                        <label>Author</label>
                        <input type="text" name="author" onChange={handleChange} />
                        <label>Description</label>
                        <textarea name="description" rows="5" cols="50" onChange={handleChange} ></textarea>
                        <label>Year Published</label>
                        <input type="text" name="year" onChange={handleChange} />
                        <label>Category</label>
                        <input type="text" name="category" onChange={handleChange} />
                        <label>Image</label>
                        <input type="text" name="image" onChange={handleChange} /><br />
                        <input type="submit" value="Add Book" />
                    </form>
                </div>

            </div>

            {/* <div className='splitPage'>
                <div className='overlay'></div>
            </div> */}

        </div>
    )
}