/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
import { Routes, Route } from 'react-router-dom';
import Header   from '../../components/Header/Header.js';
import Home     from '../Home/Home.js';
import Books    from '../Books/Books.js';
import AddBook  from '../../components/AddBook/AddBook';
import Book     from '../Book/Book';
import styles   from './App.module.css';




/*  ===========================================================================
//  APP
//  =======================================================================  */
export default function App() {
	
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<Books />} />
				<Route path="/books/new" element={<AddBook />} />
				<Route path="/books/q/:id" element={<Book />} />
			</Routes>
		</div>
	);
}