import Navbar from "../sub-components/Navbar";
import BlogAuthor from "../sub-components/blog-components/blog-author";
import BlogComments from "../sub-components/blog-components/blog-comments";
import FormBlogComments from "../sub-components/blog-components/blog-form-comments";
import '../sub-components/blog-components/blog-styles.css';


export default function Blog(props) {
    return (
        <>
            <Navbar />
            <div className="blog-section">
                <div className="blog-container">
                    <div className="blog-title">{props.blogTitle}</div>
                    <div className="blog-thumbnail" style={{'backgroundImage': `url(${props.blogThumbnail})`}}>
                        {/* Use the passed thumbnail prop */}
                    </div>
                    <div className="blog-content">{props.blogContent}</div>
                    <BlogAuthor varAuthorName={props.blogAuthorName} varAuthorImg={props.blogAuthorImg}/>
                </div>
                
                {/* Comment Section */}
                <div className="blog-comment-list-container">
                    <h2>Comments</h2>
                    <div className="comment-list">
                        {/* <BlogComments /> */}
                        <BlogComments />
                        <BlogComments />
                    </div>
                    <div className="comment-form">
                        {/* <FormBlogComments /> */}
                        <FormBlogComments />
                    </div>
                </div>
            </div>

        </>
    );
}