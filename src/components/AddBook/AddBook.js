/*  ===========================================================================
//  AddBook.js
//  ===========================================================================
//  - Allows the user to enter details for a new book into a form
//  - Upon submission, the info is stored into the database
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useRef } from 'react';
import { addBook } from '../../utilities/books-api';
import { useNavigate } from 'react-router-dom';
import styles from './AddBook.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function AddBook({ user, setUser }) {
    const navigate = useNavigate();
    // console.log(user)




    // Types of book mediums. This is used in the html form.
    const mediums = [
        { name  : "print",     label: "Print" },
        { name  : "ebook",     label: "E-Book" },
        { name  : "audio",     label: "AudioBook" }
    ];

    // Assigns the initial values of each variable
    const printRef = useRef(false);
    const ebookRef = useRef(false);
    const audioRef = useRef(false);

    // Used in the html form to assign a ref to a checkbox
    const refs = [printRef,ebookRef,audioRef];

    // Only used to console.log the value of each checkbox
    const handleChecked = () => {
        console.log("Print",     printRef.current.checked);
        console.log("E-Book",    ebookRef.current.checked);
        console.log("AudioBook", audioRef.current.checked);
    }




    // Have read this book. This is used in the html form.
    const readRef   = useRef(true);

    // Only used to console.log the value of the first radio button
    const handleRadio = () => {
        console.log("Have Read", (readRef.current.checked));
    }





    

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

        // Assign a new property which contains the checkbox values to the formData
        formData.medium = {
            print: printRef.current.checked,
            ebook: ebookRef.current.checked,
            audio: audioRef.current.checked
        }

        // Assign a new property which contains the radio button value for the first 'read' radio button
        formData.read = readRef.current.checked;
        
        console.log(formData);


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
                        <label>Title&nbsp;(required)</label>
                        <input type="text" name="title" onChange={handleChange} autoFocus required />
                        <label>Author</label>
                        <input type="text" name="author" onChange={handleChange} />
                        <label>Description</label>
                        <textarea name="description" rows="5" cols="50" onChange={handleChange} ></textarea>
                        <label>Date Published&nbsp;(YYYY-MM-DD)</label>
                        <input type="text" name="year" onChange={handleChange} />
                        <label>Category</label>
                        <input type="text" name="category" onChange={handleChange} />
                        <label>Image URL</label>
                        <input type="text" name="image" onChange={handleChange} /><br />

                        {/* Checkboxes */}
                        <fieldset>
                            <legend>Type of Book Owned</legend>
                            {
                                mediums.map((medium, i) => {
                                    return(
                                        <span key={i}>
                                            <input type="checkbox" name={medium.name} id={medium.name} ref={refs[i]} onChange={handleChecked} />
                                            <label htmlFor={medium.name}>{medium.label}</label>
                                        </span>
                                    )
                                })
                            }
                        </fieldset>

                        <fieldset>
                            <legend>Already Read This Book?</legend>
                            <span>
                                <input type="radio" name="read" id="readTrue" ref={readRef} onChange={handleRadio} />
                                <label htmlFor="readTrue">Read</label>
                            </span>
                            <span>
                                <input type="radio" name="read" id="readFalse" onChange={handleRadio} />
                                <label htmlFor="readFalse">Not Read</label>
                            </span>
                        </fieldset>

                        <button type="submit" ><i className="fa-solid fa-plus marginRight10"></i><span>Add Book</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}