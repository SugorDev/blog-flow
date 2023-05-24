import React from 'react';
import "./PostStyle.css";
import { Link } from 'react-router-dom';


export default function FeaturePosts(props){
    const data = [
        {
            "title": "Just a Standard Format Post.",
            "content": "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua",
            "category": "Lifestyle",
            "thumbnail": "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
        },
        {
            "title": "Just a Standard Format Post.",
            "content": "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua",
            "category": "Lifestyle",
            "thumbnail": "https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg"
        },
        {
            "title": "Just a Standard Format Post.",
            "content": "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua",
            "category": "Lifestyle",
            "thumbnail": "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
        },
    ];

    return (
        <div className='feature-section'>
            <div className="feature-post-container animate__animated animate__fadeIn">
                <div className="feature-post-column">
                    <Link to={'/blog-flow'} className="feature-post-link">
                        <img className="feature-post-item" src={data[0].thumbnail} alt="feature-post" />
                        <div className='feature-content'>
                            <h2>{data[0].title}</h2>
                            <p>{data[0].content}</p>
                        </div>
                    </Link>
                </div>
                <div className="feature-post-column">
                    <Link to={'/blog-flow'} className="feature-post-link">
                        <img className="feature-post-item" src={data[1].thumbnail} alt="feature-post" />
                        <div className='feature-content'>
                            <h2>{data[1].title}</h2>
                            <p>{data[1].content}</p>
                        </div>
                    </Link>
                    <Link className='last-feature feature-post-link' to={'/blog-flow'}>
                        <img className="feature-post-item" src={data[2].thumbnail} alt="feature-post" />
                        <div className='feature-content'>
                            <h2>{data[2].title}</h2>
                            <p>{data[2].content}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}