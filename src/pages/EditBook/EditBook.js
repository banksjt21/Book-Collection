/*  ===========================================================================
//  EditBook.js
//  ===========================================================================
//  - Allows the user to edit the current details of a book
//  - Upon submission, the info is stored into the database
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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




    // Types of book mediums. This is used in the html form.
    const mediums = [
        { name: "print", label: "Print" },
        { name: "ebook", label: "E-Book" },
        { name: "audio", label: "AudioBook" }
    ];

    // Assigns the initial values of each variable
    const printRef = useRef(false);
    const ebookRef = useRef(false);
    const audioRef = useRef(false);

    // Used in the html form to assign a ref to a checkbox
    const refs = [printRef, ebookRef, audioRef];


    // Only used to console.log the value of each checkbox
    const handleChecked = () => {
        console.log("Print", printRef.current.checked);
        console.log("E-Book", ebookRef.current.checked);
        console.log("AudioBook", audioRef.current.checked);

        const bookCopy = book;
        bookCopy.medium = {
            print: printRef.current.checked,
            ebook: ebookRef.current.checked,
            audio: audioRef.current.checked
        }
    }





    const [formData, setFormData] = useState(null);

    const getFormData = async () => {
        setFormData(book);
        // console.log(formData)
    };

    useEffect(() => {
        getFormData(book);
        console.log(formData);
    })


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleUpdate = async (event) => {
        event.preventDefault();

        // Assign a new property which contains the checkbox values to the formData
        formData.medium = {
            print: printRef.current.checked,
            ebook: ebookRef.current.checked,
            audio: audioRef.current.checked
        }

        console.log(formData)

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
                                <h2><Link className='backArrow' to={`/books/q/${book._id}/`} ><span >‹</span></Link>Editing: </h2>
                                {/* <label>Title</label><br /> */}
                                <input className={styles.editTitle} type="text" name="title" onChange={handleChange} defaultValue={book.title} placeholder="Book Title" required /><br />
                            </div>

                            {/* <label>Author</label><br /> */}
                            <input className={styles.editAuthor} type="text" name="author" onChange={handleChange} defaultValue={book.author} placeholder="Authors (comma-separated)" /><br />

                            <img className={styles.editImage} src={book.image || '/images/book-cover-placeholder.png'} title={book.title} /><br />

                            {/* <label>Category</label><br /> */}
                            <input className={styles.editCategory} type="text" name="category" onChange={handleChange} defaultValue={book.category} placeholder="Categories (comma-separated)" /><br />

                            {/* <label>Year Published</label><br /> */}
                            <input className={styles.editPublicationDate} type="text" name="year" onChange={handleChange} defaultValue={book.year} placeholder="Publication Date (YYYY-MM-DD)" /><br />

                            {/* <label>Description</label><br /> */}
                            <textarea className={styles.editDescription} name="description" rows="5" cols="50" onChange={handleChange} defaultValue={book.description} placeholder="Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ></textarea><br />

                            {/* <label>Image</label><br /> */}
                            <input className={styles.editImageURL} type="text" name="image" onChange={handleChange} defaultValue={book.image} placeholder="http://www.ExampleLinkToAnAwesomeImage.com" /><br />


                            {/* Checkboxes */}
                            <fieldset>
                                <legend>Type of Book Owned</legend>
                                {
                                    mediums.map((medium, i) => {

                                        book.medium = book.medium || {
                                            print: false,
                                            ebook: false,
                                            audio: false
                                        }

                                        return (
                                            <span key={i}>
                                                <input type="checkbox" name={medium.name} id={medium.name} ref={refs[i]} onChange={handleChecked} defaultChecked={book.medium[medium.name]} />
                                                <label htmlFor={medium.name}>{medium.label}</label>
                                            </span>
                                        )
                                    })
                                }
                            </fieldset>


                            <button type="submit" ><i className="fa-solid fa-file-pen marginRight10"></i><span>Update Book</span></button>
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