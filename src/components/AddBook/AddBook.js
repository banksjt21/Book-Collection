/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
import { useState } from 'react';
import { addBook } from '../../utilities/books-api';
import { useNavigate } from 'react-router-dom';




/*  ===========================================================================
//  ADDBOOK.js
//  =======================================================================  */
export default function AddBook() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        year: "",
        category: "",
        image: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const book = await addBook(formData);
        navigate('/');
        console.log(book);
    }


    return (
        <div>
            <h2>Add a New Book</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Title</label><br />
                <input type="text" name="title" onChange={handleChange} required /><br />
                <label>Author</label><br />
                <input type="text" name="author" onChange={handleChange} /><br />
                <label>Description</label><br />
                <textarea name="description" rows="5" cols="50" onChange={handleChange} ></textarea><br />
                <label>Year Published</label><br />
                <input type="text" name="year" onChange={handleChange} /><br />
                <label>Category</label><br />
                <input type="text" name="category" onChange={handleChange} /><br />
                <label>Image</label><br />
                <input type="text" name="image" onChange={handleChange} /><br />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    )
}