import {
  BsGearFill,
  BsBellFill,
  BsDot,
  BsThreeDots,
} from "react-icons/bs";

import profileImage from "../../assets/images/hasen-profile.jpg";
import fedexLogo from '../../assets/images/fedex-logo.png';
import "./notifications.scss";

const Notifications = () => {
  return (
    <div className="notifications-page">
      <div className="row">

        
        <div className="col-lg-3">
          <div className="notification-sidebar card border-0 shadow-sm">

            <div className="profile-section text-center">
              <img
                src={profileImage}
                alt="Hasen Ali"
              />

              <div className="profile-name">

                  <h5>Hasen Ali</h5>

                  <span className="verify-badge">
                    <i className="bi bi-patch-check-fill"></i>
                  </span>

                </div>

              <p>
                Full Stack Developer | MERN & MEAN Stack |
                React | Angular | Node.js | MongoDB |
                TypeScript
              </p>

              <span>Gurugram, Haryana, India</span>
            </div>

            <hr />

            <div className="sidebar-links">
              <button>
                <BsBellFill />
                Manage your notifications
              </button>

              <button>
                <BsGearFill />
                View settings
              </button>
            </div>

          </div>
        </div>

        
        <div className="col-lg-6 mt-4 mt-lg-0">

          
          <div className="windows-app-card card border-0 shadow-sm">
            <div>
              <h5>
                LinkedIn is better on the new Windows app
              </h5>

              <p>
                Never miss a reaction or comment
              </p>
            </div>

            <button className="btn btn-primary">
              Open the app
            </button>
          </div>

          
          <div className="notification-tabs card border-0 shadow-sm">
            <button className="active">All</button>
            <button>Jobs</button>
            <button>My posts</button>
            <button>Mentions</button>
          </div>

          
          <div className="notification-list">

            
            <div className="notification-item unread card border-0 shadow-sm">

              <div className="notification-left">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt=""
                />
              </div>

              <div className="notification-content">
                <h6>
                  Siddharth Rathod posted:
                </h6>

                <p>
                  One wrong answer in HR round can silently reduce
                  your salary by lakhs. Many candidates fail salary
                  negotiations before negotiations even begin...
                </p>

                <span>12m</span>
              </div>

              <div className="notification-right">
                <BsDot className="dot" />
                <BsThreeDots />
              </div>

            </div>

            
            <div className="notification-item unread card border-0 shadow-sm">

              <div className="notification-left">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt=""
                />
              </div>

              <div className="notification-content">
                <h6>
                  Utsav Mishra posted:
                </h6>

                <p>
                  Fox is currently hiring across multiple roles
                  and levels! If you’re actively looking or
                  exploring new opportunities...
                </p>

                <span>42m</span>
              </div>

              <div className="notification-right">
                <BsDot className="dot" />
                <BsThreeDots />
              </div>

            </div>

            
            <div className="notification-item unread card border-0 shadow-sm">

              <div className="notification-left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Quantiphi_Logo.png"
                  alt=""
                />
              </div>

              <div className="notification-content">
                <h6>
                  Quantiphi was live
                </h6>

                <p>
                  Episode 5 | The AI Factory Transformation:
                  Are your enterprise AI initiatives stuck in
                  pilot purgatory?
                </p>

                <span>1h</span>
              </div>

              <div className="notification-right">
                <BsDot className="dot" />
                <BsThreeDots />
              </div>

            </div>

            
            <div className="notification-item unread card border-0 shadow-sm">

              <div className="notification-left">
                <img
                  src="https://randomuser.me/api/portraits/men/31.jpg"
                  alt=""
                />
              </div>

              <div className="notification-content">
                <h6>
                  Arjun Yadav is open to work
                </h6>

                <p>
                  Frontend Developer | HTML • CSS • Bootstrap •
                  JavaScript • React.js | MERN Stack Certified
                </p>

                <span>12 mutual connections</span>
              </div>

              <div className="notification-right">
                <BsDot className="dot" />
                <BsThreeDots />
              </div>

            </div>

          </div>
        </div>

        
        <div className="col-lg-3 mt-4 mt-lg-0">
          <div className="ads-card card border-0 shadow-sm">

            <span className="promoted">
              Promoted
            </span>

            <div className="text-center">
              <img
                src={fedexLogo} alt="FedEx" className="company-logo" />

              <h5 className="mt-4">
                FedEx MEISA
              </h5>

              <p>
                Delivering Possibilities with FedEx in MEISA.
              </p>

              <small>
                Follow us for insights, business solutions,
                and logistics innovations.
              </small>

              <button className="btn btn-primary follow-btn mt-4">
                Follow
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Notifications;