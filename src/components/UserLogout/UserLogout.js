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
                <button className="" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}