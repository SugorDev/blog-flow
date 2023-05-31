import React, { useContext, useState, useEffect } from 'react';
import Post from './Post';
import './PostStyle.css';
import { MyContext } from '../../context/PostsContext';

export default function Explore() {
  const { selectedCategory } = useContext(MyContext);

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts or when selectedCategory changes
  }, [selectedCategory]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/post-list');
      const data = await response.json();
      setFilteredPosts(data.posts); // Assuming data.posts is the array of posts from the API response
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(slicedPosts);
  }, [filteredPosts, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="post-section animate__animated animate__fadeIn animate__delay-1s">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              content={post.description}
              category={post.category}
              thumbnail={post.thumbnail}
            />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      {filteredPosts.length > postsPerPage && (
        <div className="pagination">
          <button
            className="angle-btn"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>

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

          <button
            className="angle-btn"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      )}
    </>
  );
}
