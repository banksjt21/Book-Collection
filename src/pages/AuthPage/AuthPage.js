/*  ===========================================================================
//  AuthPage.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import styles       from './AuthPage.module.css';
import LoginForm    from '../../components/LoginForm/LoginForm';
import SignUpForm   from '../../components/SignupForm/SignupForm';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className="">
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    );
}