import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../../context/PostsContext";



export default function NavbarUtil(props) {
    const token = localStorage.getItem('userToken');
    const {user, setUser} = useContext(MyContext);

    useEffect(() => {
        if (token) {
            console.log('user is logged in');
            axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUser(response.data);
                console.log(user);
            }).catch(err => {
                console.error(err);
            });
        } else {
            console.log('user is NOT logged in');
        }
    }, [token]);

    function logoutUser() {
        localStorage.removeItem("userToken");
        window.location.reload(false);
    }

    return (
        <>
            <div className="nav-right-section">
                <div className='home-login-btn'>
                    <Link to={'/login'} hidden={token}>Login</Link>
                    <Link to={'/user-profile'} hidden={!token}>{user && user.name}</Link>
                </div>
                <div className='home-user-btn' hidden={!token}>
                    <div className="dropdown">
                        <div className="nav-user-icon nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-circle-user"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to={'/blog-flow/user-profile'}>Profile</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={'/user-settings'}>Settings</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" onClick={logoutUser}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}