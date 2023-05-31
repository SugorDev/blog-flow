import React, { useState, useEffect } from 'react';
import Post from './Post';
import './PostStyle.css';

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/post-list');
      const data = await response.json();
      setPosts(data.posts.slice(0, 12)); // Show only the first 20 posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <div className="post-section-title">
        <p>Recent Posts</p>
      </div>
      <div className="post-section">
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            content={post.content}
            category={post.category}
            thumbnail={post.thumbnail}
          />
        ))}
      </div>
    </>
  );
};

export default RecentPosts;
