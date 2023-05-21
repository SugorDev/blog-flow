import Navbar from "../sub-components/Navbar";
import React, { useState } from 'react';
import './create-style.css';

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [about, setAbout] = useState('');
    const [tags, setTags] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here, you can perform any necessary actions with the blog data (e.g., submit to a server or update state)
      console.log('Blog submitted:', { title, thumbnail, about, tags });
      // Reset the form after submission
      setTitle('');
      setThumbnail('');
      setAbout('');
      setTags('');
    };

    return (
        <>
            <Navbar />
            <div className="create-post-section">
                <form className="create-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="form-blog-title" className="form-label">What is title of your blog?</label>
                        <input type="email" className="form-control" id="form-blog-title" required/>
                    </div>
                    <div className="mb-3">
                        <label for="form-blog-photo" className="form-label">Blog Thumbnail</label>
                        <input type="file" className="form-control" id="form-blog-photo" required/>
                    </div>
                    <div className="mb-3">
                        <label for="form-blog-content" className="form-label">What is the Blog about?</label>
                        <textarea className="form-control" id="form-blog-content" rows="3" required></textarea>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" for="form-blog-tags">Options</label>
                        <select className="form-select" id="form-blog-tags">
                            <option selected>Choose...</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
                    <button type="submit">Create Blog</button>
                </form>
            </div>
        </>
    );
}