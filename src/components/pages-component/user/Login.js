import './login-styles.css';
import { useState } from 'react';
import * as yup from "yup";
import axios from 'axios';
import { useFormik } from 'formik';


const registrationSchema = yup.object({
    name: yup.string()
        .required("Email address is required")
        .min(4, "Name must be at least 4 characters long"),
    email: yup.string()
        .email("Invalid email format")
        .required("Email address is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
});

const loginSchema = yup.object({
    email: yup.string()
        .email("Invalid email format")
        .required("Email address is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
});

export default function Login() {
    const [signing, setSigning] = useState(false);


    function setSigningOption() {
        setSigning(signing => !signing);
    }

    const regFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: registrationSchema,
        onSubmit: (values) => {
            axios.post('http://127.0.0.1:8000/api/register', {
                name: values.name,
                email: values.email,
                password: values.password
            }).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.error(err);
            });
        }
    });

    const logFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            axios.post('http://127.0.0.1:8000/api/login', {
                email: values.email,
                password: values.password
            }).then((response) => {
                window.location.href = '/blog-flow';
                console.log(response);
                const { data } = response;
                localStorage.setItem('userToken', data.token);
            }).catch((err) => {
                console.error(err);
            });
        }
    });

    return (
        <>
            <div className="login-section">
                <div className="login-container">
                    {/* 
                        login section 
                    */}
                    <div className={signing ? 'left-side hidden-side' : 'left-side shown-side'}>
                        <form onSubmit={logFormik.handleSubmit} className={signing ? 'hidden-form' : ''}>
                            <h1>Blog<span>F</span>low</h1>
                            <div className="mb-3">
                                <label htmlFor="user-email-address" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" id="email-address" aria-describedby="emailHelp" value={logFormik.values.email} onChange={logFormik.handleChange} required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user-password" className="form-label">Password</label>
                                <input type="password" name='password' className="form-control" id="user-password" value={logFormik.values.password} onChange={logFormik.handleChange} required />
                            </div>
                            <div className="mb-3 form-check remember-btn">
                                <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                <label className="form-check-label" htmlFor="rememberCheck">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div className='signup-text'>
                                Don't have an account?
                                <button className='signup-btn' onClick={setSigningOption} type="reset">Sign Up</button>
                            </div>
                        </form>
                        <p className={signing ? 'slide-right' : 'hidden-form'}>Join the vibrant community of bloggers on BlogFlow - Sign up today and embark on your journey of sharing stories and ideas!</p>
                    </div>

                    {/* 
                        signup section 
                    */}
                    <div className={signing ? 'right-side shown-side' : 'right-side hidden-side'}>
                        <form onSubmit={regFormik.handleSubmit} className={signing ? '' : 'hidden-form'}>
                            <h1>Sign Up</h1>
                            <div className="mb-3">
                                <label htmlFor="new-user-full-name" className="form-label">Full Name</label>
                                <input type="text" name='name' className="form-control" id="new-user-full-name" value={regFormik.values.name} onChange={regFormik.handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="new-user-email-address" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" id="new-user-email-address" value={regFormik.values.email} onChange={regFormik.handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="new-user-password" className="form-label">Password</label>
                                <input type="password" name='password' className="form-control" id="new-user-password" value={regFormik.values.password} onChange={regFormik.handleChange} required />
                            </div>
                            <div className="mb-3 form-check remember-btn">
                                <input type="checkbox" className="form-check-input" id="termsCheck" required />
                                <label className="form-check-label" htmlFor="termsCheck">I accept Terms & Conditions</label>
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