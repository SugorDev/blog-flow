import React, { useContext, useState, useEffect } from 'react';
import Post from './Post';
import './PostStyle.css';
import { MyContext } from '../../../context/PostsContext';
import data from './explore-posts.json';


export default function Explore() {
  const { selectedCategory } = useContext(MyContext);

  const { posts } = data;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const [currentPosts, setCurrentPosts] = useState([]);

  // Filter the posts based on the selected category
  const filteredPosts = selectedCategory === 'All' ? posts : posts.filter(post => post.category === selectedCategory);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, setCurrentPage]);
  
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(slicedPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPosts, currentPage]);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    if (currentPage === pageNumber) {
      return; // Return early if the clicked page is the same as the current page
    }
    setCurrentPage((prevPage) => pageNumber);
  };

  return (
    <>
      <div className="post-section">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <Post key={index} title={post.title} content={post.content} category={post.category} thumbnail={post.thumbnail} />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      {filteredPosts.length > postsPerPage && (
        <div className="pagination">
          <button><i className="fa-solid fa-angle-left"></i></button>

          {Array(Math.ceil(filteredPosts.length / postsPerPage))
            .fill()
            .map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`page-btn ${currentPage === index + 1 ? 'category-active' : ''}`}
              >
                {index + 1}
              </button>
          ))}

          <button><i className="fa-solid fa-angle-right"></i></button>
        </div>
      )}
    </>
  );
};
