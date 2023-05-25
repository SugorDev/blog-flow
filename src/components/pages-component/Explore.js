import React from 'react';
import { Link } from 'react-router-dom';
import CategoryNav from '../sub-components/CategoryNav';
import Navbar from '../sub-components/Navbar';
import ExplorePosts from "../sub-components/ExplorePosts";
import MyContextProvider from "../../context/PostsContext";

export default function Explore() {
  return (
    <>
      <Navbar />
      <div className='explore-header'>
        Embark on a Journey of Discovery - Explore the Boundless World of BlogFlow!
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
        <MyContextProvider>
          <CategoryNav />
          <div className='create-post-container animate__animated animate__zoomIn'>
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

