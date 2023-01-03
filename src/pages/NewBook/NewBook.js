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
        backgroundImage: "url(/images/kot-ptitsa-knigi.png)",
        backgroundSize: '2400px',
        backgroundPosition: '25% 95%',
        backgroundRepeat: 'none'
    }

    return (
        <>
            <div>
                <h3>{showSearch ? 'Add Book Manually' : 'Add Book via Search'}</h3>
                <div className="buttonGroup">
                    <span onClick={() => setShowSearch(true)} className='mainSubtitle'>Add Book Manually</span>
                    <span onClick={() => setShowSearch(false)} className='mainSubtitle'>Add Book via Search</span>
                </div>
                {showSearch ? <AddBook user={user} setUser={setUser} /> : <Search user={user} setUser={setUser} />}
            </div>
        </>
    )
}