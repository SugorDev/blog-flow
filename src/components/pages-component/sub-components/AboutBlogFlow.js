import { Link } from 'react-router-dom';
import './AbfStyle.css';



export default function AboutBlogFlow(){
    return (
        <>
            <div className="abf-section container-fluid d-flex justify-content-center align-items-center flex-column p-5">
                <h3>About BlogFlow</h3>
                <p className="mx-5 p-5 text-center">BlogFlow platform is to provide users with a user-friendly and streamlined environment for creating, sharing, and exploring blog content. It aims to empower individuals and communities to express their thoughts, ideas, and expertise through blogging.</p>
                <ul className='socmed-icons'>
                    <li><Link to={'https://www.facebook.com'} target='_blank'><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link to={'https://www.instagram.com'} target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to={'https://www.twitter.com'} target='_blank'><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link to={'https://www.pinterest.com'} target='_blank'><i className="fa-brands fa-pinterest"></i></Link></li>
                </ul>
                <h5>© Copyright BlogFlow 2023</h5>
            </div>
        </>
    );
}