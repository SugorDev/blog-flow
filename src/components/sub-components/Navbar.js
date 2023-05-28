import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import MyContextProvider from '../../context/PostsContext';
import NavbarUtil from './NavbarUtil';

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
                                        <Link to={'/blog-flow/explore'}>Explore</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/blog-flow/about-us'}>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/blog-flow/contacts'}>Contacts</Link>
                                    </li>
                            </ul>
                            <MyContextProvider>
                                <NavbarUtil />
                            </MyContextProvider>
                        </div>
                    </div>
                </nav>
        </>
    );
}