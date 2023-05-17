import React, { useContext, useState, useEffect } from 'react';
import Post from './Post';
import './PostStyle.css';
import { MyContext } from '../../../context/PostsContext';


export default function Explore() {
  const { selectedCategory } = useContext(MyContext);

  const posts = [
    { title: 'Just a Staadsaasdsasadsadsaasdsassndard Format Post.', content: 'Content of Post 1, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Just a Standard Format Post.', content: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 3', content: 'Content of Post 3, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 4', content: 'Content of Post 4, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Travel', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 5', content: 'Content of Post 5, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Fashion', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 1', content: 'Content of Post 1, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Fashion', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 2', content: 'Content of Post 2, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 3', content: 'Content of Post 3, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 4', content: 'Content of Post 4, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Fashion', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 5', content: 'Content of Post 5, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 5', content: 'Content of Post 5, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Health', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 5', content: 'Content of Post 5, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Travel', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Travel', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    // Add more posts as needed
  ];

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
        </div>
      )}
    </>
  );
};
