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
        backgroundPosition: '25% 65%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }

    return (
        <div id={styles.authPage} style={backImage}>
            <header id={styles.authHeader}>
                <div id={styles.headerDetails}>
                    <div className={styles.headerDetailsContent}>
                        <div className={styles.titleBlock}>
                            <img src='/images/logo.svg' />
                            <h1>TSUNDOKU</h1>
                        </div>
                        
                        <p className={styles.subtitle}>Tsundoku (Japanese: 積ん読) refers to the phenomenon of acquiring reading materials, but letting them pile up in one's home without reading them.</p>
                        <p className={styles.subtext}>Tsundoku, as an app, allows users to easily manage their ever-growing book collection.</p>
                        <div className="buttonGroup">
                            <button onClick={() => setShowLogin(true)} className={styles.buttonLogin}><span>Login</span><i className="fa-solid fa-right-to-bracket marginLeft10"></i></button>
                            <button onClick={() => setShowLogin(false)} className={styles.buttonSignup}><i className="fa-solid fa-book-bookmark marginRight10"></i><span>Signup</span></button>
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
                        <p>Signing up is easy and takes less than a minute! Once registered, simply login to start adding!</p>
                    </div>
                    <div>
                        <img src='/images/icon-open-book.png' alt='signup' />
                        <h3>Add Books</h3>
                        <p>Adding books to your collection is made is with our convenient search feature.</p>
                    </div>
                    <div>
                        <img src='/images/icon-books-standing.png' alt='signup' />
                        <h3>Manage Your Collection!</h3>
                        <p>Once you've added a few books, simply click on the book of your choice and update its details.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}