/*  ===========================================================================
//  Header.js
//  ===========================================================================
//  - Displays the logo and navigation for all pages
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { Link } from 'react-router-dom';
import UserLogout from '../UserLogout/UserLogout';
import styles from './Header.module.css';




/*  ===========================================================================
//  HEADER
//  =======================================================================  */
export default function Header({ user, setUser }) {
    return (
        <header>
            <div id={styles.titleLinks}>
                <h1>TSUNDOKU</h1>
                <nav>
                    <ul>
                        {/* <li><Link to={`/`} >Home</Link></li> */}
                        <li><Link to={`/books`} >Collection</Link></li>
                        <li><Link to={`/books/new`}>Add Book</Link></li>
                        {/* <li><Link to={`/books/search`}>Add a Book via Search</Link></li> */}
                    </ul>
                </nav>
            </div>

            <UserLogout user={user} setUser={setUser} />
        </header>
    )
}