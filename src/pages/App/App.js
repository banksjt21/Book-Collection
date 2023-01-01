/*  ===========================================================================
//  App.js
//  ===========================================================================
//  - Main application file
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import Books from '../Books/Books';
import AddBook from '../../components/AddBook/AddBook';
import ShowBook from '../ShowBook/ShowBook';
import EditBook from '../EditBook/EditBook';
import Search from '../../components/Search/Search';
import SearchResults from '../SearchResults/SearchResults.js';
import styles from './App.module.css';

import { Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function App() {

	const [user, setUser] = useState(getUser());

	return (
		<div>

			{
				user ?
					<>
						<Header user={user} setUser={setUser} />
						<Routes>
							{/* client-side route that renders the component instance if the path matches the url in the address bar */}
							<Route path="/" element={<Home user={user} setUser={setUser} />} />
							<Route path="/books" element={<Books user={user} setUser={setUser} />} />
							<Route path="/books/new" element={<AddBook user={user} setUser={setUser} />} />
							<Route path="/books/q/:id/edit" element={<EditBook user={user} setUser={setUser} />} />
							<Route path="/books/q/:id" element={<ShowBook user={user} setUser={setUser} />} />
							<Route path="/books/search" element={<Search user={user} setUser={setUser} />} />
							<Route path="/books/results" element={<SearchResults user={user} setUser={setUser} />} />
							{/* redirect to /books if path in address bar hasn't matched a <Route> above */}
							<Route path="/*" element={<Navigate to="/books" />} />
						</Routes>
					</>
					:
					<AuthPage setUser={setUser} />
			}

		</div>
	);
}