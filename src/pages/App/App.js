/*  ===========================================================================
//  App.js
//  ===========================================================================
//  - Main application file
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { Routes, Route } from 'react-router-dom';
import Header   from '../../components/Header/Header.js';
import Home     from '../Home/Home.js';
import Books    from '../Books/Books.js';
import AddBook  from '../../components/AddBook/AddBook';
import ShowBook from '../ShowBook/ShowBook';
import EditBook from '../EditBook/EditBook.js';
import styles   from './App.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function App() {
	
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<Books />} />
				<Route path="/books/new" element={<AddBook />} />
				<Route path="/books/q/:id/edit" element={<EditBook />} />
				<Route path="/books/q/:id" element={<ShowBook />} />
			</Routes>
		</div>
	);
}