import React from 'react';
import './PostStyle.css';
import { Link } from 'react-router-dom';


export default function Post(props){
  return (
    <div className="post-card">
      <span>...</span>
      <Link to={'/explore'}><div className='post-card-thumbnail' style={{'backgroundImage': `url(${props.thumbnail})`}}></div></Link>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div className='category-container'>
        <p>{props.category}</p>
      </div>
    </div>
  );
}