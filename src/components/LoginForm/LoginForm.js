/*  ===========================================================================
//  LoginForm.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function LoginForm({ setUser }) {
	
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<>
			<div className="">
				<p className={styles.authText}>Already have an account?</p>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" autoFocus required /><br />
					<input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required /><br />
					<button type="submit">LOGIN</button>
				</form>
			</div>
			<p className="">&nbsp;{error}</p>
		</>
	);
}