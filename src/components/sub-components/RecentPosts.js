import React from 'react';
import Post from './Post';
import './PostStyle.css';

import data from './posts.json';

const RecentPosts = () => {
  const { posts } = data;


  return (
    <>
      <div className='post-section-title'>
        <p>Recent Posts</p>
      </div>
      <div className="post-section">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} category={post.category} thumbnail={post.thumbnail}/>
        ))}
      </div>
    </>

  );
};

export default RecentPosts;
