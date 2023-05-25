import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/PostsContext";



export default function NavbarUtil() {
    const { loggedIn, setLoggedIn } = useContext(MyContext);
    
    function setLogout(e){
        setLoggedIn(false);
    }

    return (
        <>
            <div className="nav-right-section">
                <div className='home-login-btn'>
                    <Link to={'/login'} hidden={loggedIn}>Login</Link>
                    <Link to={'/user-profile'} hidden={!loggedIn}>Name</Link>
                </div>
                <div className='home-user-btn' hidden={!loggedIn}>
                    <div className="dropdown">
                        <div className="nav-user-icon nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-circle-user"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to={'/user-profile'}>Profile</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={'/user-settings'}>Settings</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={'/login'} onClick={setLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}