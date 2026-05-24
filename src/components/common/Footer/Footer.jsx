import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
            <div className="containter">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold text-primary ms-2">LinkedIn Clone</h4>
                        <p className="text-light-emphasis ms-2">
                            Professional networking platform built with React 19, Redux Toolkik, React Router, Bootstrap, and SCSS.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-semibold mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/network">My Network</a></li>
                            <li><a href="/jobs">Jobs</a></li>
                            <li><a href="messages">Messaging</a></li>
                            <li><a href="/notifications">Notifications</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-semibold mb-3">Connect With Us</h5>
                        <div className="d-flex gap-3 social-icons">
                            <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitterX /></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook /></a>
                        </div>
                    </div>
                </div>
                <hr className="border-secondary" />
                <div className="text-center small">
                    &#169; 2026 LinkedIn Clone | Develop with React 19
                </div>
            </div>
        </footer>
    );
};


export default Footer;