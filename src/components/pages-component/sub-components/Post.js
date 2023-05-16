import React from 'react';
import './PostStyle.css';


export default function Post(props){
  return (
    <div className="post-card">
      <div className='post-card-thumbnail' style={{'backgroundImage': `url(${props.thumbnail})`}}></div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}