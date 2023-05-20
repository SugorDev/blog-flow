import { Link } from 'react-router-dom';
import './NavbarStyle.css';

export default function Navbar(){
    return (
        <>
            <nav className="nav-section navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid w-75">
                    <Link className='navbar-brand' to={'/blog-flow'}>Blog<span>F</span>low</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/blog-flow'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/explore'}>Explore</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/about-us'}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contacts'}>Contacts</Link>
                                </li>
                        </ul>
                        <div className="nav-right-section">
                            <div className='home-login-btn'>
                                <Link to={'/login'}>Login</Link>
                                <Link to={'/user-profile'} hidden>Name</Link>
                            </div>
                            <div className='home-user-btn'>
                                <Link to={'/user-profile'}>
                                    <i className="fa-regular fa-circle-user"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}