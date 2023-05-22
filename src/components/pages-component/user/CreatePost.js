import './create-style.css';
import Navbar from "../sub-components/Navbar";
import AboutBlogFlow from '../sub-components/AboutBlogFlow';

export default function CreatePost(){
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
                        <input type="file" className="form-control" id="form-blog-photo" required/>
                    </div>
                    <div className="mb-3">
                        <label for="form-blog-content" className="form-label">What is the Blog about?</label>
                        <textarea className="form-control" id="form-blog-content" rows="15" required></textarea>
                    </div>
                    <div className="input-group mb-3">
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