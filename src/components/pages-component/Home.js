import Navbar from "./sub-components/Navbar";
import RecentPosts from "./sub-components/RecentPosts";
import "./Pages-Style.css";


export default function Home(){
    return (
        <>
            <Navbar />
            <RecentPosts />
        </>
    );
}