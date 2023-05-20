import AboutBlogFlow from "./sub-components/AboutBlogFlow";
import Navbar from "./sub-components/Navbar";
import "./Pages-Style.css";
import 'animate.css';
import { useState } from "react";


export default function AboutUs(){
    return (
        <>
            <Navbar />
            <div className="about-us-section">
                <h1>Welcome to Blog<span>F</span>low!</h1>
                <h3>At BlogFlow, we believe in the power of storytelling and the impact it can have on individuals and communities. Our platform is designed to empower bloggers and writers of all levels, providing them with the tools and resources they need to bring their ideas to life.</h3>
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>Our mission is to create a vibrant and inclusive community where bloggers can freely express themselves, connect with like-minded individuals, and inspire others through their words. We strive to foster a supportive environment that encourages creativity, collaboration, and personal growth.</p>
                </div>
                <div className="offer-section">
                    <h2>What We Offer</h2>
                    <div className="offer-card-container">
                        <div className="offer-card">
                            <p>Seamless Writing Experience:</p> With our intuitive and user-friendly interface, you can focus on what you do best - writing captivating blog posts. Our distraction-free editor allows you to effortlessly bring your ideas to the digital page.
                        </div>
                        <div className="offer-card">
                            <p>Stylish and Customizable Templates:</p> Choose from a range of beautifully designed templates that suit your blog's personality. Personalize the look and feel of your blog with custom branding options and make it uniquely yours.
                        </div>
                        <div className="offer-card">
                            <p>Social Engagement:</p> Connect with fellow bloggers, readers, and influencers through our social features. Engage in meaningful discussions, receive feedback, and expand your reach by promoting your content across various social media platforms.
                        </div>
                        <div className="offer-card">
                            <p>Powerful Analytics:</p> Gain insights into your blog's performance with our comprehensive analytics tools. Track your readership, analyze engagement metrics, and refine your content strategy to optimize your impact.
                        </div>
                        <div className="offer-card">
                            <p>Monetization Opportunities:</p> Unlock the potential to monetize your blog through various avenues, such as sponsored content, affiliate marketing, or displaying targeted advertisements. We provide resources and guidance to help you navigate the world of monetization effectively.
                        </div>
                        <div className="offer-card">
                            <p>Support and Learning Resources:</p> We're here to support you every step of the way. Access our knowledge base, attend webinars, and connect with our dedicated support team for any questions or assistance you may need.
                        </div>
                    </div>
                    
                </div>
            </div>
            <AboutBlogFlow />
        </> 
    );
}