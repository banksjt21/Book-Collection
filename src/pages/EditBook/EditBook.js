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
            <main style={backImage}>
                <div id={styles.bookDetails} className={`mainPadding ${styles.bookEditing}`}>
                    <div className={styles.bookEditingDiv}>

                        <form autoComplete="off" onSubmit={handleUpdate}>
                            <div className={styles.editTitleDiv}>
                                <h2>Editing: </h2>
                                {/* <label>Title</label><br /> */}
                                <input className={styles.editTitle} type="text" name="title" onChange={handleChange} defaultValue={book.title} autoFocus required /><br />
                            </div>

                            {/* <label>Author</label><br /> */}
                            <input className={styles.editAuthor} type="text" name="author" onChange={handleChange} defaultValue={book.author} /><br />

                            <img className={styles.editImage} src={book.image || '/book-cover-placeholder.png'} title={book.title} /><br />

                            {/* <label>Category</label><br /> */}
                            <input className={styles.editCategory} type="text" name="category" onChange={handleChange} defaultValue={book.category} /><br />

                            {/* <label>Year Published</label><br /> */}
                            <input className={styles.editPublicationDate} type="text" name="year" onChange={handleChange} defaultValue={book.year} /><br />

                            {/* <label>Description</label><br /> */}
                            <textarea className={styles.editDescription} name="description" rows="5" cols="50" onChange={handleChange} defaultValue={book.description} ></textarea><br />

                            {/* <label>Image</label><br /> */}
                            <input className={styles.editImageURL} type="text" name="image" onChange={handleChange} defaultValue={book.image} /><br />

                            <input type="submit" value="Update Book" />
                        </form>
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