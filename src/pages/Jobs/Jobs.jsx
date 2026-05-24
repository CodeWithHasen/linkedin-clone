import {
  BsBookmarkFill,
  BsBriefcaseFill,
  BsGeoAltFill,
  BsClockFill,
  BsStars,
} from "react-icons/bs";

import profileImage from "../../assets/images/hasen-profile.jpg";

import "./jobs.scss";

const Jobs = () => {
  return (
    <div className="jobs-page">
      <div className="row g-4">

        

        <div className="col-lg-3">

          <div className="card border-0 shadow-sm jobs-sidebar">

            <div className="card-body">

              <div className="profile-section text-center">

                <img
                  src={profileImage}
                  alt="Hasen Ali"
                  className="profile-image"
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

                <small>Gurugram, Haryana,  India</small>
              </div>

              <hr />

              <div className="sidebar-menu">

                <div className="menu-item">
                  <BsBriefcaseFill />
                  <span>Experience</span>
                </div>

                <div className="menu-item">
                  <BsStars />
                  <span>Preferences</span>
                </div>

                <div className="menu-item">
                  <BsBookmarkFill />
                  <span>Job tracker</span>
                </div>

                <div className="menu-item">
                  <BsClockFill />
                  <span>My Career Insights</span>
                </div>

              </div>

              <button className="btn btn-outline-primary rounded-pill w-100 mt-4">
                Post a free job
              </button>

            </div>
          </div>

        </div>

        

        <div className="col-lg-9">

          <div className="card border-0 shadow-sm top-jobs-card">

            <div className="card-body">

              <div className="jobs-header">
                <h4>Top job picks for you</h4>

                <p>
                  Based on your profile, preferences,
                  and activity like applies, searches,
                  and saves
                </p>
              </div>

              
              <div className="job-item">

                <div className="job-left">

                  <div className="company-logo">
                    FH
                  </div>

                  <div className="job-details">

                    <h5>
                      Frontend Developer | $70/hr Remote
                    </h5>

                    <p className="company-name">
                      Crossing Hurdles
                    </p>

                    <div className="job-meta">
                      <span>
                        <BsGeoAltFill />
                        India (Remote)
                      </span>

                      <span>$20/hr - $70/hr</span>
                    </div>

                    <small className="status-text">
                      Actively reviewing applicants
                    </small>

                    <div className="job-tags">
                      <span>Promoted</span>
                      <span>Easy Apply</span>
                    </div>

                  </div>
                </div>

                <button className="btn btn-primary rounded-pill">
                  Apply
                </button>

              </div>

              

              <div className="job-item">

                <div className="job-left">

                  <div className="company-logo react">
                    FP
                  </div>

                  <div className="job-details">

                    <h5>
                      Software Engineer - Full Stack
                      Developer (React)
                    </h5>

                    <p className="company-name">
                      FinacPlus
                    </p>

                    <div className="job-meta">
                      <span>
                        <BsGeoAltFill />
                        India (Remote)
                      </span>
                    </div>

                    <small className="status-text">
                      Actively reviewing applicants
                    </small>

                    <div className="job-tags">
                      <span>Verified Job</span>
                      <span>Easy Apply</span>
                    </div>

                  </div>
                </div>

                <button className="btn btn-primary rounded-pill">
                  Apply
                </button>

              </div>

              

              <div className="job-item">

                <div className="job-left">

                  <div className="company-logo angular">
                    PB
                  </div>

                  <div className="job-details">

                    <h5>
                      React JS Developer
                    </h5>

                    <p className="company-name">
                      Policybazaar.com
                    </p>

                    <div className="job-meta">
                      <span>
                        <BsGeoAltFill />
                        Gurugram (On-site)
                      </span>
                    </div>

                    <small className="status-text">
                      3 connections work here
                    </small>

                    <div className="job-tags">
                      <span>Promoted</span>
                    </div>

                  </div>
                </div>

                <button className="btn btn-primary rounded-pill">
                  Apply
                </button>

              </div>

              <div className="show-all-btn">
                <button className="btn btn-light">
                  Show all →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Jobs;