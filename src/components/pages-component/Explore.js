import CategoryNav from "./sub-components/CategoryNav";
import Navbar from "./sub-components/Navbar";
import ExplorePosts from "./sub-components/ExplorePosts";
import MyContextProvider from "../../context/PostsContext";



export default function Explore(){
    return (
        <>
            <Navbar />
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
                <MyContextProvider>
                    <CategoryNav />
                    <ExplorePosts />
                </MyContextProvider>
            </div>

        </>
    );
}