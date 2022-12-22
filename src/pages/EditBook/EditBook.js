/*  ===========================================================================
//  EditBook.js
//  ===========================================================================
//  - Allows the user to edit the current details of a book
//  - Upon submission, the info is stored into the database
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as booksAPI from '../../utilities/books-api';
import styles from './EditBook.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function EditBook() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [book, setBook] = useState(null);

    const getBook = async () => {
        const retrievedBook = await booksAPI.showBook(id);
        console.log(retrievedBook)
        setBook(retrievedBook);
    }

    useEffect(() => {
        getBook();
    }, []);

    const [formData, setFormData] = useState(null);

    const getFormData = async => {
        setFormData(book);
    };


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        const book = await booksAPI.updateBook(id, formData);
        navigate(`/books/q/${id}`);
        console.log(book);
    }


    const loaded = () => {
        return (
            <div>
                <h2>Editing: {book.title}</h2>
                <form autoComplete="off" onSubmit={handleUpdate}>
                    <label>Title</label><br />
                    <input type="text" name="title" onChange={handleChange} defaultValue={book.title} required /><br />
                    <label>Author</label><br />
                    <input type="text" name="author" onChange={handleChange} defaultValue={book.author} /><br />
                    <label>Description</label><br />
                    <textarea name="description" rows="5" cols="50" onChange={handleChange} defaultValue={book.description} ></textarea><br />
                    <label>Year Published</label><br />
                    <input type="text" name="year" onChange={handleChange} defaultValue={book.year} /><br />
                    <label>Category</label><br />
                    <input type="text" name="category" onChange={handleChange} defaultValue={book.category} /><br />
                    <label>Image</label><br />
                    <input type="text" name="image" onChange={handleChange} defaultValue={book.image} /><br />
                    <input type="submit" value="Update Book" />
                </form>
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