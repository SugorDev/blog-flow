import Navbar from "./sub-components/Navbar";

export default function Blog(props) {
    return (
        <>
            <Navbar />
            <div className="blog-section">
                <div className="blog-title">{props.blogTitle}</div>
                <div className="blog-thumbnail">
                    {/* Use the passed thumbnail prop */}
                    <img src={props.blogThumbnail} alt="Blog Thumbnail" />
                </div>
                <div className="blog-content">{props.blogContent}</div>
                <div className="blog-author">{props.blogAuthor}</div>
            </div>
            <div className="blog-comment-section">
                <h3>Comments</h3>
                <div className="comment-list">
                    {/* <BlogComments /> */}
                </div>
                <div className="comment-form">
                    {/* <BlogFormComments /> */}
                </div>
            </div>
        </>
    );
}