import './Pages-Style.css';
import Navbar from "../sub-components/Navbar";
import AboutBlogFlow from "../sub-components/AboutBlogFlow";

export default function Contacts(){
    return (
        <>
            <Navbar />
            <div className="contacts-section mt-5 d-flex justify-content-center align-items-center flex-column">
                <h2><i className="fa-solid fa-comments"></i> Reach Us</h2>
                <form className="contact-form w-50 m-5 d-flex flex-column">
                    <div className="mb-3 animate__animated animate__fadeIn">
                        <label className="form-check-label" for="contact-email">Email</label>
                        <input type="email" className="form-control" id="contact-title" placeholder="johndoe@example.com"/>
                    </div>
                    <div className="mb-3 animate__animated animate__fadeIn">
                        <label className="form-check-label" for="contact-name">Your Name</label>
                        <input type="email" className="form-control" id="contact-name" placeholder="John Doe"/>
                    </div>
                    <div className="mb-3 animate__animated animate__fadeIn">
                        <label for="contact-content" className="form-label">Tell us what you need</label>
                        <textarea className="form-control" id="contact-content" rows="10" placeholder="Tell us what you think..."></textarea>
                    </div>
                    <button className="send-contact animate__animated animate__fadeInRight w-25 align-self-center">Send Message</button>
                </form>
            </div>
            <AboutBlogFlow />
        </>
    );
}