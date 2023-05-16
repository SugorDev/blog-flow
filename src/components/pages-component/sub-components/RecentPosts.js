import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import './PostStyle.css';

const RecentPosts = () => {
  const sampleCategory = ['Lifestyle', 'Fashion', 'Technology']

  const posts = [
    { title: 'Just a Standard Format Post.', content: 'Content of Post 1, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Just a Standard Format Post.', content: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 3', content: 'Content of Post 3, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 4', content: 'Content of Post 4, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 5', content: 'Content of Post 5, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Fashion', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 1', content: 'Content of Post 1, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Fashion', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 2', content: 'Content of Post 2, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 3', content: 'Content of Post 3, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 4', content: 'Content of Post 4, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Fashion', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 5', content: 'Content of Post 5, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Lifestyle', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 6', content: 'Content of Post 6, Content of Post 1 Content of Post 1, Content of Post 1 Content of Post 2, Content of Post 1', category: 'Technology', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    // Add more posts as needed
  ];

  return (
    <>
      <div className="recent-post-section">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} category={post.category} thumbnail={post.thumbnail} />
        ))}
      </div>
      <div className='more-container'>
        <Link className='more-link' to={'/explore'}>Explore <i className="fa-solid fa-angles-right"></i></Link>
      </div>
    </>

  );
};

export default RecentPosts;
