import { Link, useNavigate } from 'react-router-dom';
import { BsLinkedin, BsEnvelopeFill, BsLockFill, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../features/auth/authSlice';

import './login.scss';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {

        
        const userData = {
            name: 'Hasen Ali',
            email: 'ali786.hasen@gmail.com',
        };

        dispatch(loginSuccess(userData));

        navigate('/');
    };

    return(
        <div className="login-page">

            <div className="login-container">

                

                <div className="login-left">
                    <div className="brand-logo">
                        <BsLinkedin />
                        <span>LinkedIn</span>
                    </div>

                    <h1>
                        Welcome Back
                    </h1>

                    <p>
                        Build your professional network, connect with recruiters,
                        explore jobs, and grow your career with your modern
                        LinkedIn Clone application.
                    </p>

                    <img
                        src="/linkedin-logo.png"
                        alt="linkedin"
                        className="login-image"
                    />
                </div>

                

                <div className="login-right">

                    <div className="auth-card shadow-lg">

                        <h2>Sign In</h2>

                        <p className="auth-subtitle">
                            Stay updated on your professional world
                        </p>

                        <div className="input-group-custom">
                            <BsEnvelopeFill className="input-icon" />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="form-control"
                            />
                        </div>

                        <div className="input-group-custom">
                            <BsLockFill className="input-icon" />

                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                            />
                        </div>

                        <div className="forgot-password">
                            <Link to="#">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            className="btn btn-primary w-100 login-btn"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>

                        <div className="divider">
                            <span>OR</span>
                        </div>

                        <button className="btn google-btn w-100">
                            <BsGoogle className="me-2 fs-5" />
                            Continue with Google
                        </button>

                        <p className="register-link">
                            New to LinkedIn?{' '}
                            <Link to="/register">
                                Join now
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;