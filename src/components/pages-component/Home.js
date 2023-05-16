import "./Pages-Style.css";
import Navbar from "./sub-components/Navbar";
import RecentPosts from "./sub-components/RecentPosts";
import FeaturePosts from "./sub-components/FeaturePosts";
import AboutBlogFlow from "./sub-components/AboutBlogFlow";


export default function Home(){
    return (
        <>
            <Navbar />
            <FeaturePosts />
            <RecentPosts />
            <AboutBlogFlow />
        </>
    );
}