import {
  BsPeopleFill,
  BsPersonPlusFill,
  BsCollectionFill,
  BsCalendarEventFill,
  BsFileEarmarkTextFill,
  BsBuilding,
  BsThreeDots,
} from "react-icons/bs";

import profileImage from "../../assets/images/hasen-profile.jpg";

import "./network.scss";

const Network = () => {
  return (
    <div className="network-page">
      <div className="row g-4">

        {/* LEFT SIDEBAR */}

        <div className="col-lg-3">

          <div className="card border-0 shadow-sm manage-network-card">

            <div className="card-body">

              <h5 className="mb-4">Manage my network</h5>

              <div className="network-menu">

                <div className="menu-item">
                  <div>
                    <BsPeopleFill />
                    <span>Connections</span>
                  </div>
                  <strong>888</strong>
                </div>

                <div className="menu-item">
                  <div>
                    <BsPersonPlusFill />
                    <span>Following & followers</span>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <BsCollectionFill />
                    <span>Groups</span>
                  </div>
                  <strong>3</strong>
                </div>

                <div className="menu-item">
                  <div>
                    <BsCalendarEventFill />
                    <span>Events</span>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <BsBuilding />
                    <span>Pages</span>
                  </div>
                  <strong>193</strong>
                </div>

                <div className="menu-item">
                  <div>
                    <BsFileEarmarkTextFill />
                    <span>Newsletters</span>
                  </div>
                  <strong>64</strong>
                </div>

              </div>
            </div>
          </div>

          {/* PROMOTED */}

          <div className="card border-0 shadow-sm mt-4 promoted-card">

            <div className="card-body">

              <small className="text-muted">Promoted</small>

              <div className="d-flex justify-content-between mt-2">
                <h6>State Bank of India</h6>
                <BsThreeDots />
              </div>

              <p className="mt-3">
                Hasen, grow your career by following
                State Bank of India
              </p>

              <small className="text-muted">
                Stay informed on industry news and trends
              </small>

              <div className="followers mt-3">
                <img src={profileImage} alt="" />
                <span>
                  SURESH & 160 other connections also follow
                </span>
              </div>

              <button className="btn btn-outline-primary rounded-pill w-100 mt-4">
                Follow
              </button>

            </div>
          </div>
        </div>

        {/* CENTER CONTENT */}

        <div className="col-lg-9">

          {/* INVITATIONS */}

          <div className="card border-0 shadow-sm invitation-card">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>Invitations (2)</h5>
                <button className="btn btn-sm btn-light">
                  Show all
                </button>
              </div>

              {/* INVITATION ITEM */}

              <div className="invite-item">

                <div className="d-flex gap-3 align-items-start">

                  <img
                    src={profileImage}
                    alt=""
                    className="invite-logo"
                  />

                  <div className="flex-grow-1">

                    <h6>Sarthak Upadhyay invited you to follow Gratia Pharma Solutions</h6>

                    <small className="text-muted">
                      Company Invitation
                    </small>

                  </div>

                  <div className="invite-actions">

                    <button className="btn btn-light rounded-pill">
                      Ignore
                    </button>

                    <button className="btn btn-primary rounded-pill">
                      Accept
                    </button>

                  </div>

                </div>
              </div>

              <hr />

              <div className="invite-item">

                <div className="d-flex gap-3 align-items-start">

                  <img
                    src={profileImage}
                    alt=""
                    className="invite-logo"
                  />

                  <div className="flex-grow-1">

                    <h6>Mokxa Technologies invited you to subscribe to Life@Mokxa</h6>

                    <small className="text-muted">
                      Newsletter • Monthly
                    </small>

                  </div>

                  <div className="invite-actions">

                    <button className="btn btn-light rounded-pill">
                      Ignore
                    </button>

                    <button className="btn btn-primary rounded-pill">
                      Accept
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* PEOPLE HIRING */}

          <div className="card border-0 shadow-sm mt-4 hiring-card">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>People who are hiring for your role</h5>

                <button className="btn btn-warning rounded-pill">
                  Try Premium for ₹0
                </button>
              </div>

              <div className="row g-4">

                {[1, 2, 3].map((item) => (
                  <div className="col-md-4" key={item}>

                    <div className="hiring-profile">

                      <img
                        src={profileImage}
                        alt=""
                        className="hiring-image"
                      />

                      <h6 className="mt-3">
                        LinkedIn Member
                      </h6>

                      <p>
                        Senior Talent Acquisition Specialist
                      </p>

                      <button className="btn btn-outline-primary rounded-pill">
                        View profile
                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* PEOPLE YOU MAY KNOW */}

          <div className="card border-0 shadow-sm mt-4 people-card">

            <div className="card-body">

              <div className="d-flex justify-content-between mb-4">
                <h5>
                  People you may know from
                  Veer Bahadur Singh Purvanchal University
                </h5>

                <button className="btn btn-light">
                  Show all
                </button>
              </div>

              <div className="row g-4">

                {[1, 2, 3, 4].map((item) => (
                  <div className="col-md-6" key={item}>

                    <div className="people-card-item">

                      <img
                        src={profileImage}
                        alt=""
                        className="people-image"
                      />

                      <div>

                        <h6>Ravindra Singh Ankur</h6>

                        <p>
                          Student at Veer Bahadur Singh
                          Purvanchal University
                        </p>

                        <button className="btn btn-outline-primary rounded-pill">
                          Connect
                        </button>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* CATCH UP */}

          <div className="card border-0 shadow-sm mt-4 catchup-card">

            <div className="card-body">

              <h5 className="mb-4">Catch up</h5>

              {[1, 2, 3, 4, 5].map((item) => (
                <div className="catchup-item" key={item}>

                  <img
                    src={profileImage}
                    alt=""
                    className="catchup-image"
                  />

                  <div>
                    <h6>Rajalaxmi Sarangi</h6>

                    <p>
                      Celebrate Rajalaxmi’s birthday today
                    </p>

                    <small>
                      Wishing you a very happy birthday!
                    </small>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Network;