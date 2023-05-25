


export default function BlogAuthor(props){
    return (
        <>
            <div className="blog-author">
                <div className="blog-author-img" style={{'backgroundImage': `url(${props.varAuthorImg})`}}></div>
                <div className="blog-author-name">{props.varAuthorName}</div>
            </div>
        </>
    );
}