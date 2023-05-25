

export default function BlogComments(props){
    return (
        <>
            <div className="blog-comment">
                <div className="blog-comment-author-container">
                    <div className="blog-comment-author-img" style={{'backgroundImage': `url("https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?cs=srgb&dl=pexels-kevin-bidwell-2380794.jpg&fm=jpg")`}}></div>
                    <section>
                        <h5>{props.authorCommentor}Jane Doe</h5>
                    </section>
                </div>
                <p className="blog-comment-content">Lor Lorem lorem lorem lorem lorem ipsum lerop klo aklbue em Lorem lorem lorem lorem lorem ipsum lerop klo aklbue lorem lorem lorem lorem ipsum lerop klo aklbue Lorem lorem lorem lorem lorem ipsum lerop klo aklbue em Lorem lorem lorem lorem lorem ipsum lerop klo aklbue lorem lorem lorem lorem ipsum lerop klo aklbue</p>
                <p className="blog-comment-date">12:00pm</p>
            </div>
        </>
    );
}