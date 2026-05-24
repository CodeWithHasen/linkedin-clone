import {
  BsSearch,
  BsThreeDots,
  BsPencilSquare,
  BsTelephone,
  BsCameraVideo,
  BsInfoCircle,
  BsEmojiSmile,
  BsPaperclip,
  BsSendFill,
} from "react-icons/bs";

import "./messages.scss";

const Messages = () => {
  return (
    <div className="messages-page">
      <div className="row">

        {/* LEFT SIDEBAR */}
        <div className="col-lg-4">
          <div className="messages-sidebar card border-0 shadow-sm">

            <div className="messages-header">
              <h5>Messaging</h5>

              <div className="header-icons">
                <BsThreeDots />
                <BsPencilSquare />
              </div>
            </div>

            <div className="search-message-box">
              <BsSearch className="search-icon" />
              <input type="text" placeholder="Search messages" />
            </div>

            <div className="message-tabs">
              <button className="active">Focused</button>
              <button>Jobs</button>
              <button>Unread</button>
              <button>Connections</button>
              <button>InMail</button>
              <button>Starred</button>
            </div>

            <div className="conversation-list">

              {/* CHAT ITEM */}
              <div className="conversation-item active">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                />

                <div className="conversation-content">
                  <div className="conversation-top">
                    <h6>Morgan Davis</h6>
                    <span>May 13</span>
                  </div>

                  <p>
                    Sponsored Build AI Agents with Openclaw = $35/hr
                  </p>
                </div>

                <span className="message-count">1</span>
              </div>

              <div className="conversation-item">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />

                <div className="conversation-content">
                  <div className="conversation-top">
                    <h6>Prashant Shakya</h6>
                    <span>Mar 31</span>
                  </div>

                  <p>You: Call me 8851358755</p>
                </div>
              </div>

              <div className="conversation-item">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt=""
                />

                <div className="conversation-content">
                  <div className="conversation-top">
                    <h6>Harjeev Bhasin</h6>
                    <span>Feb 17</span>
                  </div>

                  <p>Please share your resume</p>
                </div>

                <span className="message-count">2</span>
              </div>

              <div className="conversation-item">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  alt=""
                />

                <div className="conversation-content">
                  <div className="conversation-top">
                    <h6>Sourabh Sahu</h6>
                    <span>Feb 3</span>
                  </div>

                  <p>Nudged! Check today’s Zip puzzle.</p>
                </div>

                <span className="message-count">1</span>
              </div>

            </div>
          </div>
        </div>

        {/* CENTER CHAT */}
        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="chat-section card border-0 shadow-sm">

            <div className="chat-header">
              <div className="chat-user">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                />

                <div>
                  <h6>Morgan Davis</h6>
                  <span>Sponsored</span>
                </div>
              </div>

              <div className="chat-icons">
                <BsTelephone />
                <BsCameraVideo />
                <BsInfoCircle />
              </div>
            </div>

            <div className="chat-body">
              <div className="message received">
                <p>
                  Hi Hasen! Would you be interested in building AI
                  agents using Openclaw and earning up to $35/hr?
                </p>
              </div>

              <div className="message received">
                <p>
                  Outlier AI pays developers to work on AI coding
                  projects remotely with weekly payments.
                </p>
              </div>

              <div className="message sent">
                <p>
                  Sounds interesting. Please share more details.
                </p>
              </div>
            </div>

            <div className="chat-footer">
              <button>
                <BsEmojiSmile />
              </button>

              <button>
                <BsPaperclip />
              </button>

              <input type="text" placeholder="Write a message..." />

              <button className="send-btn">
                <BsSendFill />
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-lg-3 mt-4 mt-lg-0">
          <div className="ads-card card border-0 shadow-sm">

            <span className="promoted">Promoted</span>

            <div className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
                alt="SBI"
                className="company-logo"
              />

              <h5 className="mt-3">
                State Bank of India
              </h5>

              <p>
                Hasen, grow your career by following
                State Bank of India
              </p>

              <small>
                Stay informed on industry news and trends
              </small>

              <div className="followers mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/13.jpg"
                  alt=""
                />

                <span>
                  SURESH & 160 others follow
                </span>
              </div>

              <button className="btn btn-primary follow-btn">
                Follow
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Messages;