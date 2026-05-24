import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsHouseDoorFill, BsPeopleFill, BsBriefcaseFill, BsChatDotsFill, BsBellFill, BsPersonCircle, BsSearch, BsGrid3X3GapFill } from 'react-icons/bs';
import profileImage from '../../../assets/images/hasen-profile.jpg';
import messageData from '../../../data/messagesData';
import notificationsData from '../../../data/notificationsData';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import './header.scss';


const Header = () => {

    const unreadMessages = messageData.reduce(
        (total, item) => total + item.unread,
        0
    );

    const unreadNotifications = notificationsData.filter(
        (item) => item.unread
    ).length;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return(
        <header className="linkedin-header shadow-sm">
            <div className="container-fluid">
                <div className="header-wrapper">

                    <div className="header-left">
                        <Link to="/" className="linkedin-logo">
                            <img
                                src="/linkedin-logo.png"
                                alt="LinkedIn"
                            />
                        </Link>

                        <div className="search-box">
                            <BsSearch className="search-icon" />
                            <input type="text" placeholder="search" className="form-control" />
                        </div>
                    </div>

                    <nav className="header-nav">
                        <NavLink to="/" end className={({ isActive }) =>
                            isActive ? 'nav-item active' : 'nav-item'}>
                            <BsHouseDoorFill className="nav-icon" />
                            <span> Home</span>
                        </NavLink>

                        <NavLink to="/network" className={({ isActive }) =>
                            isActive ? 'nav-item active' : 'nav-item'}>
                            <BsPeopleFill className="nav-icon" />
                            <span> My Network</span>
                        </NavLink>

                        <NavLink to="/jobs" className={({ isActive }) =>
                            isActive ? 'nav-item activt': 'nav-item'}>
                            <BsBriefcaseFill className="nav-icon" />
                            <span> Jobs</span>
                        </NavLink>

                        <NavLink to="/messages" className={({ isActive }) =>
                            isActive ? 'nav-item active' : 'nav-item'}>
                            <div className="position-relative">
                                <BsChatDotsFill className="nav-icon" />
                                <span className="notification-badge">{unreadMessages}</span>
                            </div>
                            <span> Messaging</span>
                        </NavLink>

                        <NavLink to="/notifications" className={({ isActive }) =>
                            isActive ? 'nav-item active' : 'nav-item'}>
                            <div className="position-relative">
                                <BsBellFill className="nav-icon" />
                                <span className="notification-badge">{unreadNotifications}</span>
                            </div>
                            <span> Notifications</span>
                        </NavLink>

                        <div className="dropdown profile-dropdown">
                            <button type="button" className="btn dropdown-toggle profile-btn" data-bs-toggle="dropdown">
                                <div className="profile-btn-wrapper">
                                    <img
                                        src={profileImage} alt="Profile" className="header-profile-img" />
                                        <div className="me-text-wrapper">
                                            <span className="me-tex"> Me</span>
                                            <i className="bi bi-caret-down-fill me-dropdown-icon"></i>
                                        </div>
                                </div>
                            </button>
                            
                            <ul className="dropdown-menu dropdown-menu-end">
                                <div className="dropdown-header">
                                    <div className="profile-top">
                                        <img src={profileImage} alt="profile" />
                                        <div className="profile-details">
                                            <div className="profile-name">
                                                <h5>Hasen Ali</h5>
                                                <span className="verify-badge">
                                                    <i className="bi bi-patch-check-fill"></i>
                                                </span>
                                            </div>
                                            <p>Full Stack Developer | MERN & MEAN Stack | React | Angular | Node.js | MongoDB | TypeScript</p>
                                        </div>
                                    </div>
                                    <Link to="/profile" className="view-profile-btn">
                                        View Profile
                                    </Link>
                                </div>
                                                                
                                <li> 
                                    <h6 className="dropdown-title">Account</h6>
                                </li>
                                <li>
                                    <Link to="/premium" className="dropdown-item premium-item">
                                        <i className="bi bi-gem"></i> Try 1 month of Premium for &#8377;0
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/settings" className="dropdown-item">
                                        Settings & Privacy
                                    </Link>
                                </li>
                                <li> 
                                    <Link to="/help" className="dropdown-item">
                                        Help
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/language" className="dropdown-item">
                                        Langauge
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                
                                <li> 
                                    <h6 className="dropdown-title">Manage</h6>
                                </li>
                                <li>
                                    <Link to="/post" className="dropdown-item">
                                        Post & Activity
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/job" className="dropdown-item">
                                        Job Posting Account
                                    </Link>
                                </li>
                                   
                                <li>
                                    <button className="dropdown-item" onClick={handleLogout}>Sign Out</button>
                                </li>
                            </ul>                        
                        </div>

                        <NavLink to="business" className={({ isActive }) =>
                            isActive ? 'nav-item active' : 'nav-item'}>
                            <BsGrid3X3GapFill className="nav-icon" />
                            <span> For Business</span>
                        </NavLink>
                        
                        <NavLink to="/premium" className={({ isActive }) =>
                            isActive ? 'nav-item premium-nav active' : 'nav-item premium-nav'}>
                                <i className="bi bi-gem"></i>
                                <span> Try Premium for &#8377;0</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;