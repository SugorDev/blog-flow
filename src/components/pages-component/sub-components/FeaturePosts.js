import React from 'react';
import "./PostStyle.css";
import { Link } from 'react-router-dom';


export default function FeaturePosts(props){
    const images = [
        'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
        'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
        'https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_02_eibw.jpg',
    ];

    return (
        <div className='feature-section'>
            <div className="feature-post-container">
                <div className="feature-post-column">
                    <Link to={'/blog-flow'} className="feature-post-link">
                        <img className="feature-post-item" src={images[1]} alt="Image 2" />
                        <div className='feature-content'>
                            <h2>Title Feature Post 1</h2>
                            <p>Lorem lorem lorem lore, lolol lo lo. Lorem ipsum lore ip sum sum.</p>
                        </div>
                    </Link>
                </div>
                <div className="feature-post-column">
                    <Link to={'/blog-flow'} className="feature-post-link">
                        <img className="feature-post-item" src={images[1]} alt="Image 2" />
                        <div className='feature-content small-content'>
                            <h2>Title Feature Post 1</h2>
                            <p>Lorem lorem lorem lore, lolol lo lo. Lorem ipsum lore ip sum sum.</p>
                        </div>
                    </Link>
                    <Link className='last-feature feature-post-link' to={'/blog-flow'}>
                        <img className="feature-post-item" src={images[2]} alt="Image 2" />
                        <div className='feature-content small-content'>
                            <h2>Title Feature Post 1</h2>
                            <p>Lorem lorem lorem lore, lolol lo lo. Lorem ipsum lore ip sum sum.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}