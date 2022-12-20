/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
import styles from './Header.module.css';
import { Link } from 'react-router-dom';



/*  ===========================================================================
//  HEADER
//  =======================================================================  */
export default function Header() {
    return (
        <header>
            <h1>Book Collection</h1>
            <nav>
                <ul>
                    <li><Link to={`/`} >Home</Link></li>
                    <li><Link to={`/books`} >Books</Link></li>
                    <li><Link to={`/books/new`}>Add a Book</Link></li>
                </ul>
            </nav>
        </header>
    )
}