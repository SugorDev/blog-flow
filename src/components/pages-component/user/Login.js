import { useState } from 'react';
import './login-styles.css';

export default function Login(){
    const [ signing, setSigning ] = useState(false);

    function setSigningOption(){
        setSigning(signing => !signing);
    }


    return (
        <>
            <div className="login-section">
                <div className="login-container">
                    {/* login section */}
                    <div className={signing ? 'left-side hidden-side' : 'left-side shown-side'}>
                        <form action='/user-profile' className={signing ? 'hidden-form' : ''}>
                            <h1>Blog<span>F</span>low</h1>
                            <div className="mb-3">
                                <label for="user-email-address" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email-address" aria-describedby="emailHelp" required/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="user-password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="user-password" required/>
                            </div>
                            <div className="mb-3 form-check remember-btn">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div className='signup-text'>
                                Don't have an account?
                                <button className='signup-btn' onClick={setSigningOption} type="reset">Sign Up</button>
                            </div>
                        </form>
                        <p className={signing ? 'slide-right' : 'hidden-form'}>Join the vibrant community of bloggers on BlogFlow - Sign up today and embark on your journey of sharing stories and ideas!</p>
                    </div>

                    {/* signup section */}
                    <div className={signing ? 'right-side shown-side' : 'right-side hidden-side'}>
                        <form action='/user-profile' className={signing ? '' : 'hidden-form'}>
                            <h1>Sign Up</h1>
                            <div className="mb-3">
                                <label for="new-user-first-name" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="new-user-first-name" required/>
                                <label for="new-user-last-name" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="new-user-last-name" required/>
                            </div>
                            <div className="mb-3">
                                <label for="new-user-email-address" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="new-user-email-address" required/>
                            </div>
                            <div className="mb-3">
                                <label for="new-user-password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="new-user-password" required/>
                            </div>
                            <div className="mb-3 form-check remember-btn">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                <label className="form-check-label" for="exampleCheck1">I accept Terms & Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Join Us</button>
                            <div className='signup-text'>
                                Already have an account?
                                <button className='signup-btn' onClick={setSigningOption} type="reset">Login</button>
                            </div>
                        </form>
                        <p className={signing ? 'hidden-form' : 'slide-left'}>Step into BlogFlow's world of creativity and collaboration - Login now and unleash your blogging potential!</p>
                    </div>
                </div>
            </div>
        </>
    );
}