import './create-style.css';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Navbar from "../sub-components/Navbar";
import AboutBlogFlow from '../sub-components/AboutBlogFlow';


export default function CreatePost(){
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    const [thumbnail, setThumbnail] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setThumbnail(file);
    };
    
    return (
        <>
            <Navbar />
            <div className="create-post-section">
                <h1>Create Your Blog</h1>
                <form className="create-form">
                    <div className="mb-3">
                        <label for="form-blog-title" className="form-label">What is title of your blog?</label>
                        <input type="email" className="form-control" id="form-blog-title" required/>
                    </div>
                    <div className="mb-3">
                        <label for="form-blog-photo" className="form-label">Blog Thumbnail</label>
                        <input type="file" className="form-control" id="form-blog-photo" onChange={handleFileChange} required/>
                        {thumbnail && (
                            <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail" className="mt-2 thumbnail-preview" />
                        )}
                    </div>
                    <div className="mb-3">
                        <label for="form-blog-content" className="form-label">What is the Blog about?</label>
                        <ReactQuill
                            modules={modules}
                            formats={[
                                'header',
                                'bold', 'italic', 'underline', 'strike',
                                'color', 'background',
                                'align',
                                'list', 'bullet',
                                'link', 'image'
                            ]}

                            id="form-blog-content"
                        />
                    </div>
                    <div className="input-group mb-3 w-25">
                        <label className="input-group-text" for="form-blog-tags">Tags</label>
                        <select className="form-select" id="form-blog-tags">
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
                    <button className='create-blog-btn' type="submit">Create Blog</button>
                </form>
            </div>
            <AboutBlogFlow />
        </>
    );
}