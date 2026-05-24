import { Link } from 'react-router-dom';
import {
    BsPersonFill,
    BsEnvelopeFill,
    BsLockFill,
    BsBriefcaseFill,
} from 'react-icons/bs';

import linkedinLogo from '../../assets/images/linkedin-logo.png';

import './register.scss';

const Register = () => {
    return(
        <div className="register-page">

            <div className="register-wrapper">

                {/* LEFT SIDE */}

                <div className="register-left">

                    <img
                        src={linkedinLogo}
                        alt="LinkedIn"
                        className="linkedin-logo"
                    />

                    <h1>
                        Join your professional community
                    </h1>

                    <p>
                        Build your professional network, discover
                        opportunities, connect with recruiters,
                        and grow your career with modern
                        full stack technologies.
                    </p>

                    <div className="feature-list">

                        <div className="feature-item">
                            <BsPersonFill />
                            <span>Build your professional profile</span>
                        </div>

                        <div className="feature-item">
                            <BsBriefcaseFill />
                            <span>Apply for top tech jobs</span>
                        </div>

                        <div className="feature-item">
                            <BsEnvelopeFill />
                            <span>Connect with developers & recruiters</span>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="register-right">

                    <div className="register-card card border-0 shadow-lg">

                        <h2>Create Account</h2>

                        <p className="subtitle">
                            Start building your professional journey
                        </p>

                        <form>

                            <div className="input-group-custom">
                                <BsPersonFill className="input-icon" />

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="form-control"
                                />
                            </div>

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

                            <div className="input-group-custom">
                                <BsLockFill className="input-icon" />

                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn register-btn"
                            >
                                Agree & Join
                            </button>

                        </form>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <button className="btn google-btn">
                            Continue with Google
                        </button>

                        <p className="signin-link">
                            Already have an account?
                            <Link to="/login">
                                Sign In
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;