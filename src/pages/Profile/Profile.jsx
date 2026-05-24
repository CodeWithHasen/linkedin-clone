
import { BsGeoAlt, BsEnvelope, BsGithub, BsLinkedin, BsGlobe, BsBriefcaseFill, BsMortarboardFill } from "react-icons/bs";
import profileImage from '../../assets/images/hasen-profile.jpg';
import bannerImage from '../../assets/images/profile-banner.png';
import './profile.scss';

const Profile = () => {
    return(
        <div className="profile-page">
            <div className="profile-cover-card card border-0 shadow-sm">
                <div className="cover-image">
                    <img src={bannerImage} alt="Banner" />
                </div>
                <div className="profile-info-wrapper">
                    <div className="profile-image">
                        <img
                            src={profileImage} alt="Hasen Ali" />
                    </div>
                    <div className="profile-content">
                        <div className="profile-header">
                            <div>
                                <h2>Hasen Ali</h2>
                                <h5>Full Stack Developer | MERN & MEAN Stack | React | Angular | Node.js | MongoDB | TypeScript</h5>
                                <p className="location">
                                    <BsGeoAlt />
                                    Gurugram, Haryana, India
                                </p>
                                <p className="connections">
                                    500+ connections
                                </p>
                            </div>
                            <button className="btn btn-primary connect-btn">
                                Connect
                            </button>
                        </div>
                        <div className="profile-links">
                            <a href="mailto:ali786.hasen@gmail.com" target="_blank">
                                <BsEnvelope />
                                Email
                            </a>
                            <a href="https://github.com/CodeWithHasen" target="_blank">
                                <BsGithub />
                                GitHub
                            </a>
                            <a href="https://hasenali-dev.netlify.app" target="_blank">
                                <BsGlobe />
                                Portfolio
                            </a>
                            <a href="https://linkedin.com/in/hasen-ali-5a672991" target="_blank">
                                <BsLinkedin />
                                LinkedIn
                            </a>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="card shadow-sm border-0 mt-4 p-4">
                <h4 className="section-title">About</h4>
                <p className="about-text">
                    I am a Full Stack Web Developer specializing in
                    MERN and MEAN stack development with expertise
                    in scalable front-end and back-end applications.<br/>

                    My technical strengths include React.js,
                    Angular standalone architecture, Node.js,
                    Express.js, MongoDB, REST APIs, and
                    responsive UI engineering.<br/>

                    I enjoy building production-level applications
                    using modern software architecture, reusable
                    component systems, lazy loading, routing,
                    state management, and deployment pipelines.
                </p>
            </div>
            <div className="card shadow-sm border-0 mt-4 p-4">
                <h4 className="section-title">
                    <BsBriefcaseFill />
                    Experience
                </h4>

                <div className="experience-item">
                    <h5>Full Stack Developer</h5>
                    <p className="company">Freelance & Personal Projects</p>
                    <span>2024 - Present</span>
                    <p>
                        Developed modern full stack applications
                        using React, Angular, Node.js, MongoDB,
                        Redux Toolkit, SCSS, Bootstrap, and
                        RESTful APIs.
                    </p>
                </div>
            </div>

            <div className="card shadow-sm border-0 mt-4 p-4">
                <h4 className="section-title">
                    <BsMortarboardFill />
                    Education
                </h4>
                <div className="education-item">
                    <h5>Master of Computer Applications (MCA)</h5>
                    <p>Jain University, Bangalore</p>
                </div>
            </div>

            <div className="card shadow-sm border-0 mt-4 p-4">
                <h4 className="section-title">
                    Skills
                </h4>
                <div className="skills-wrapper">
                    <span className="skill-badge primary">HTML5</span>
                    <span className="skill-badge primary">CSS3</span>
                    <span className="skill-badge primary">SCSS</span>
                    <span className="skill-badge primary">Bootstrap</span>
                    <span className="skill-badge primary">JavaScript ES6+</span>
                    <span className="skill-badge primary">TypeScript</span>

                    <span className="skill-badge dark">React.js</span>
                    <span className="skill-badge dark">Angular</span>
                    <span className="skill-badge dark">Express.js</span>

                    <span className="skill-badge success">Node.js</span>
                    <span className="skill-badge success">MongoDB</span>
                    <span className="skill-badge success">REST APIs</span>

                    <span className="skill-badge warning">MERN Stack</span>
                    <span className="skill-badge warning">MEAN Stack</span>

                    <span className="skill-badge info">Git</span>
                    <span className="skill-badge info">GitHub</span>
                    <span className="skill-badge info">VS Code</span>
                    <span className="skill-badge info">Postman</span>
                    <span className="skill-badge info">Chrome Devtools</span>

                    <span className="skill-badge secondary">Firebase</span>
                    <span className="skill-badge secondary">Netlify</span>
                    <span className="skill-badge secondary">GitHub Pages</span>

                    <span className="skill-badge danger">SPA</span>
                    <span className="skill-badge danger">Routing</span>
                    <span className="skill-badge danger">Lazy Loading</span>
                    <span className="skill-badge danger">State Management</span>
                    <span className="skill-badge danger">Responsive Design</span>
                </div>
            </div>
        </div> 
    );
};

export default Profile;