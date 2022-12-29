/*  ===========================================================================
//  App.js
//  ===========================================================================
//  - Main application file
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { Routes, Route } from 'react-router-dom';
import Header   from '../../components/Header/Header';
import Home     from '../Home/Home';
import Books    from '../Books/Books';
import AddBook  from '../../components/AddBook/AddBook';
import ShowBook from '../ShowBook/ShowBook';
import EditBook from '../EditBook/EditBook';
import styles   from './App.module.css';
import Search from  '../Search/Search';
import SearchResults from '../SearchResults/SearchResults.js';




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
				<Route path="/books/search" element={<Search /> } />
				<Route path="/books/results" element={<SearchResults />} />
			</Routes>
		</div>
	);
}