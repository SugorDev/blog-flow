import { Link } from 'react-router-dom';
import data from '../sample-user-posts.json';
import '../profile-style.css';

export default function UserPosts(){
    const { posts } = data;

    return (
        <>  
            {posts.map((post, index) => (
                <div key={index} className="user-post">
                    <span>{post.title}</span>
                    <Link to={'/blog-flow'}><div className='user-post-thumbnail' style={{'backgroundImage': `url(${post.thumbnail})`}}></div></Link>
                </div>
            ))}
        </>
    );
}