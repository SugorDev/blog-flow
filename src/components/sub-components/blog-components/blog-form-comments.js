

export default function FormBlogComments(props){
    return (
        <>
            <form className="form-blog-comment">
                <textarea rows={5} placeholder="Your thoughts..."></textarea>
                <button>Reply</button>
            </form>
        </>
    );
}