/*  ===========================================================================
//  AuthPage.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState } from 'react';
import styles from './AuthPage.module.css';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignupForm/SignupForm';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    const backImage = {
        backgroundImage: "url(/images/kot-ptitsa-knigi.png)",
        backgroundSize: '2400px',
        backgroundPosition: '25% 95%',
        backgroundRepeat: 'none'
    }

    return (
        <div id={styles.authPage} style={backImage}>
            <header id={styles.authHeader}>
                <div id={styles.headerDetails}>
                    <div className={styles.headerDetailsContent}>
                        <h1>TSUNDOKU</h1>
                        <p className={styles.subtitle}>Tsundoku (Japanese: 積ん読) refers to the phenomenon of acquiring reading materials but letting them pile up in one's home without reading them.</p>
                        <p className={styles.subtext}>Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.</p>
                        <div className="buttonGroup">
                            <button onClick={() => setShowLogin(true)} className={styles.buttonLogin}>Login</button>
                            <button onClick={() => setShowLogin(false)} className={styles.buttonSignup}>Signup</button>
                        </div>
                    </div>
                </div>

                <div id={styles.authForm}>
                    <h3>{showLogin ? 'LOGIN' : 'SIGNUP'}</h3>
                    {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
                </div>
            </header>

            <main>
                <h2>Manage Your Book Collection Easily!</h2>
                <div className={styles.steps}>
                    <div>
                        <img src='/images/icon-book-pen.png' alt='signup' />
                        <h3>Signup Here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div>
                        <img src='/images/icon-open-book.png' alt='signup' />
                        <h3>Add Books</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div>
                        <img src='/images/icon-books-standing.png' alt='signup' />
                        <h3>Manage Your Collection!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}