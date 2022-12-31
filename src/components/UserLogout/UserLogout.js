/*  ===========================================================================
//  UserLogout.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import styles from './UserLogout.module.css';
import { logOut } from '../../utilities/users-service';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function UserLogout({ user, setUser }) {

    function handleLogout() {
        logOut();
        setUser(null);
    }

    return (
        <div className={styles.UserLogOut}>
            <div>{user.username}</div>
            <div className="">{user.email}</div>
            <button className="" onClick={handleLogout}>LOG OUT</button>
        </div>
    );
}