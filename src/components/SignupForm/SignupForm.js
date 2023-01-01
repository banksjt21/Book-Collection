/*  ===========================================================================
//  SignupForm.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import { signUp } from '../../utilities/users-service';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function SignupForm({ setUser }) {
    
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    });
    const [error, setError] = useState('');


    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
        setError('');
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = { ...credentials };
            delete formData.confirm;
            // delete formData.error;

            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData);
            // Baby step
            setUser(user);
        } catch {
            // An error happened on the server
           setError({ error: 'Sign Up Failed - Try Again' });
        }
    };



    // We must override the render method
    // The render method is the equivalent to a function-based component
    // (its job is to return the UI)

    const disable = credentials.password !== credentials.confirm;

    return (
        <div>
            <div className="">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="">&nbsp;{credentials.error}</p>
        </div>
    );
}
