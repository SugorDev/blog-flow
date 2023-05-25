import "./Pages-Style.css";
import { Link } from 'react-router-dom';
import Navbar from "../sub-components/Navbar";
import RecentPosts from "../sub-components/RecentPosts";
import FeaturePosts from "../sub-components/FeaturePosts";
import AboutBlogFlow from "../sub-components/AboutBlogFlow";


export default function Home(){
    return (
        <>
            <Navbar />
            <FeaturePosts />
            <RecentPosts />
            <div className='more-container'>
                <Link className='more-link' to={'/explore'}>Explore <i className="fa-solid fa-angles-right"></i></Link>
            </div>
            <AboutBlogFlow />
        </>
    );
}