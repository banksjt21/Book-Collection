/*  ===========================================================================
//  UserLogout.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { logOut } from '../../utilities/users-service';
import styles from './UserLogout.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function UserLogout({ user, setUser }) {

    function handleLogout() {
        logOut();
        setUser(null);
    }

    return (
        <div id={styles.userLogout}>
            <div className=''>
                {/* {user.username} */}
                <p>Signed in as: {user.email}</p>
            </div>

            <div>
                <button onClick={handleLogout}><span>Logout</span><i className="fa-solid fa-person-through-window marginLeft10"></i></button>
            </div>
        </div>
    );
}