import React from 'react';
import CategoryNav from "./sub-components/CategoryNav";
import Navbar from "./sub-components/Navbar";
import ExplorePosts from "./sub-components/ExplorePosts";
import MyContextProvider from "../../context/PostsContext";
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
        <MyContextProvider>
          <CategoryNav />
          <div className='create-post-container'>
            <Link className='create-post' to={'/create-post'}>
              Create Post
            </Link>
          </div>
          <ExplorePosts />
        </MyContextProvider>
      </div>
    </>
  );
}

