import { Link } from 'react-router-dom';
import './profile-style.css';
import Navbar from '../../sub-components/Navbar';
import UserPosts from './user-sub-components/UserPosts';
import AboutBlogFlow from '../../sub-components/AboutBlogFlow';

export default function UserProfile(){
    const userData = {
            'profile-pic' : 'https://cdn.discordapp.com/attachments/773993070373896284/1079458247003623535/received_535769868498611.jpg',
        }
    
    
    return (
        <>
            <Navbar />
            <div className="profile-section d-flex justify-content-center align-items-center flex-column animate__animated animate__fadeIn">
                <h1 className='animate__animated animate__bounceIn'>Profile</h1>
                <div className='profile-header d-flex justify-content-center align-items-center'>
                    <div className='user-display d-flex justify-content-center align-items-center flex-column'>
                        <div className='user-pic animate__animated animate__fadeIn animate__delay-1s' style={{'backgroundImage': `url(${userData['profile-pic']})`}}></div>
                        <p className='user-name animate__animated animate__fadeInLeft animate__delay-1s'>Your Name</p>
                    </div>
                    <div className='user-bio animate__animated animate__fadeIn animate__delay-2s'>
                        Hi there! I'm [Your Name], a passionate blogger and storyteller with a love for sharing inspiring content with the world. I believe that every person has a unique story to tell, and through my blog, I aim to create a space where those stories can be celebrated.
                    </div>
                </div>
                <div className='user-main-body d-flex justify-content-center align-items-start animate__animated animate__fadeIn animate__delay-3s'>
                        <div className='user-social-links d-flex justify-content-start align-items-center flex-column'>
                            <h3>Social Links</h3>
                            <ul>
                                <li>
                                    <i className="fa-brands fa-facebook"></i>
                                    <Link>John Doe</Link>
                                </li>
                                <li>
                                    <i className="fa-brands fa-instagram"></i>
                                    <Link>@_itsmejohndoe</Link>
                                </li>
                                <li>
                                    <i className="fa-brands fa-twitter"></i>
                                    <Link>@johndoe</Link>
                                </li>
                                <li>
                                    <i className="fa-brands fa-youtube"></i>
                                    <Link>JohnDoeChannel</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='user-posts-section'>
                            <h2> Author Posts </h2>
                            <div className='user-posts-container'>
                            <UserPosts />
                            </div>
                        </div>
                </div>
            </div>
            <AboutBlogFlow />
        </>
    );
}