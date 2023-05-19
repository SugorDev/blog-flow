import './user-styles.css';
import { Link } from 'react-router-dom';


export default function Login(){
    return (
        <>
            <div className="login-section">
                <div className="login-container">
                    <div className='left-side'>
                        <h1>Blog<span>F</span>low</h1>
                        <form action='/blog-flow'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3 form-check remember-btn">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        <div className='signup-text'>
                            Don't have an account?
                            <Link to={'/signup'}>Sign Up</Link>    
                        </div>
                    </div>
                    <div className='right-side'>
                        Step into BlogFlow's world of creativity and collaboration - Login now and unleash your blogging potential!
                    </div>
                </div>
            </div>
        </>
    );
}