/*  ===========================================================================
//  NewBook.js
//  ===========================================================================
//  - Allows the user to enter details for a new book into a form
//  - Upon submission, the info is stored into the database
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import AddBook from '../../components/AddBook/AddBook';
import Search from '../../components/Search/Search';
// import { useNavigate } from 'react-router-dom';
import styles from './NewBook.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function NewBook({ user, setUser }) {
    const [showSearch, setShowSearch] = useState(true);

    const backImage = {
        backgroundImage: "url(/images/bookshelf-1-bw-faded.png)",
        backgroundPosition: '25% 35%',
        backgroundRepeat: 'none',
        backgroundAttachment: 'fixed'
    }

    return (
        <main style={backImage} id={styles.searchResults} >
            <div id={styles.newBook} className="splitPage mainPadding">
                <div>
                    <h2>{showSearch ? 'Add Book via Search' : 'Add Book Manually'}</h2>
                    <div className="buttonGroup">
                        <span onClick={() => setShowSearch(true)} className={`mainSubtitle ${styles.searchLink}`}>Add Book via Search</span>
                        <span className='mainSubtitle'> | </span>
                        <span onClick={() => setShowSearch(false)} className={`mainSubtitle ${styles.searchLink}`}>Add Book Manually</span>
                    </div>
                    {showSearch ? <Search user={user} setUser={setUser} /> : <AddBook user={user} setUser={setUser} />}
                </div>

            </div>
            <div className='splitPage'>
                <div className='overlay'>
                    <img src='/images/reading-girls.png' />
                </div>
            </div>
        </main>
    )
}