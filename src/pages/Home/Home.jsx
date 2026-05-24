import {
  BsBookmark,
  BsPeopleFill,
  BsPlayBtnFill,
  BsImageFill,
  BsNewspaper,
  BsCalendarEvent
} from "react-icons/bs";

import profileImage from "../../assets/images/hasen-profile.jpg";
import bannerImage from "../../assets/images/profile-banner.png";
import postImage from "../../assets/images/post-image.png";

import PostCard from "../../components/feed/PostCard/PostCard";

import "./home.scss";

const Home = () => {

  const postData = {
    title: "#Infosys is hiring for Frontend Developers",
    body: `
Skills: HTML, CSS, JavaScript, React.js

Salary: 6 LPA - 12 LPA

Years of Experience: 0 - 4 years

Comment your Mail ID to get assignment link.
    `,
    likes: 39,
    image: postImage
  };

  return (

    <div className="linkedin-home">

      <div className="row g-4">

        

        <div className="col-lg-3">

          <div className="card left-sidebar border-0 shadow-sm overflow-hidden">

            <div className="sidebar-cover">
              <img src={bannerImage} alt="banner" />
            </div>

            <div className="text-center profile-section">

              <img
                src={profileImage}
                alt="Hasen Ali"
                className="sidebar-profile"
              />

              <div className="profile-name">

                <h5>Hasen Ali</h5>

                <span className="verify-badge">
                  <i className="bi bi-patch-check-fill"></i>
                </span>

              </div>

              <p className="headline">
                Full Stack Developer | MERN & MEAN Stack | React |
                Angular | Node.js | MongoDB | TypeScript
              </p>

              <p className="location">
                Gurugram, Haryana, India
              </p>

            </div>

            <div className="sidebar-stats">

              <div className="stat-item">
                <span>Profile viewers</span>
                <strong>21</strong>
              </div>

              <div className="stat-item">
                <span>Post impressions</span>
                <strong>6</strong>
              </div>

            </div>

            <div className="premium-box">
              <small>Unlock exclusive tools & insights</small>
              <h6>Try Premium for ₹0</h6>
            </div>

            <div className="sidebar-links">

              <div className="link-item">
                <BsBookmark />
                <span>Saved items</span>
              </div>

              <div className="link-item">
                <BsPeopleFill />
                <span>Groups</span>
              </div>

              <div className="link-item">
                <BsNewspaper />
                <span>Newsletters</span>
              </div>

              <div className="link-item">
                <BsCalendarEvent />
                <span>Events</span>
              </div>

            </div>

          </div>

        </div>

        

        <div className="col-lg-6">

          

          <div className="card create-post border-0 shadow-sm p-3">

            <div className="d-flex align-items-center gap-3">

              <img
                src={profileImage}
                alt="profile"
                className="post-profile"
              />

              <button className="start-post-btn">
                Start a post
              </button>

            </div>

            <div className="post-actions">

              <button>
                <BsPlayBtnFill className="video-icon" />
                Video
              </button>

              <button>
                <BsImageFill className="photo-icon" />
                Photo
              </button>

              <button>
                <BsNewspaper className="article-icon" />
                Write article
              </button>

            </div>

          </div>

          

          <div className="feed-sort">
            <span>Sort by: </span>
            <strong>Top</strong>
          </div>

          

          <PostCard post={postData} />

          

          <div className="card sponsored-post border-0 shadow-sm p-4 mt-4">

            <small className="text-muted">
              Promoted
            </small>

            <h5 className="mt-2">
              Search for Software Engineer roles
            </h5>

            <p>
              Companies are hiring developers with React,
              Angular, Node.js and Full Stack experience.
            </p>

            <button className="btn btn-primary rounded-pill px-4">
              Learn More
            </button>

          </div>

        </div>

        

        <div className="col-lg-3">

          <div className="card news-card border-0 shadow-sm p-4">

            <h5 className="mb-4">
              LinkedIn News
            </h5>

            <div className="news-item">
              <h6>Top companies to work for in India</h6>
              <small>9h ago • 8,306 readers</small>
            </div>

            <div className="news-item">
              <h6>Mid-tier IT firms rejig leadership roles</h6>
              <small>5h ago • 288 readers</small>
            </div>

            <div className="news-item">
              <h6>Frontend hiring rises across startups</h6>
              <small>3h ago • 1,230 readers</small>
            </div>

            <div className="news-item">
              <h6>React & AI skills trending in 2026</h6>
              <small>2h ago • 950 readers</small>
            </div>

            <button className="show-more-btn">
              Show more
            </button>

          </div>

          
          <div className="card puzzle-card border-0 shadow-sm p-4 mt-4">

            <h5>LinkedIn Puzzles</h5>

            <p className="mb-2">
              Zip - a quick brain teaser
            </p>

            <small>
              Solve in 60s or less!
            </small>

            <button className="btn btn-outline-primary w-100 mt-3">
              Play Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;