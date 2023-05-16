import React from 'react';
import Post from './Post';
import './PostStyle.css';

const RecentPosts = () => {
  const posts = [
    { title: 'Post 1', content: 'Content of Post 1', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 2', content: 'Content of Post 2', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 3', content: 'Content of Post 3', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 4', content: 'Content of Post 4', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    { title: 'Post 5', content: 'Content of Post 5', thumbnail: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg' },
    { title: 'Post 6', content: 'Content of Post 6', thumbnail: 'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg' },
    // Add more posts as needed
  ];

  return (
    <div className="recent-post-section">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} thumbnail={post.thumbnail} />
      ))}
    </div>
  );
};

export default RecentPosts;
