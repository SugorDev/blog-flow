import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return (
        <>
            <nav className="nav-section navbar bg-body-tertiary fixed-top">
                <div className="container-fluid w-75">
                    <Link className='nav-link navbar-brand fs-1' to={'/blog-flow'}>BlogFlow</Link>

                    <button className="nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BlogFlow</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/blog-flow'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/blog-flow'}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/blog-flow'}>Contacts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/blog-flow'}>Advertise</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Lifestyle</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Fashion</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Technology</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Travel</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Health</a></li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}