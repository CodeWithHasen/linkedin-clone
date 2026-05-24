import {
    BsGrid3X3GapFill,
    BsCart3,
    BsPeopleFill,
    BsPersonWorkspace,
    BsBarChartFill,
    BsBriefcaseFill,
    BsMegaphoneFill,
    BsBookFill,
    BsBuilding
} from 'react-icons/bs';

import './Business.scss';

const Business = () => {

    const businessTools = [
        {
            icon: <BsCart3 />,
            title: 'Sell',
            desc: 'Unlock sales opportunities'
        },
        {
            icon: <BsPeopleFill />,
            title: 'Groups',
            desc: 'Build professional communities'
        },
        {
            icon: <BsPersonWorkspace />,
            title: 'Talent',
            desc: 'Find, attract and recruit talent'
        },
        {
            icon: <BsBarChartFill />,
            title: 'Talent Insights',
            desc: 'Discover workforce trends'
        },
        {
            icon: <BsBriefcaseFill />,
            title: 'Post a job',
            desc: 'Get qualified applicants quickly'
        },
        {
            icon: <BsMegaphoneFill />,
            title: 'Advertise',
            desc: 'Acquire customers and grow your business'
        },
        {
            icon: <BsBookFill />,
            title: 'Learning',
            desc: 'Courses to develop your employees'
        },
        {
            icon: <BsBuilding />,
            title: 'Admin Center',
            desc: 'Manage billing and account details'
        }
    ];

    return (

        <div className="business-page container py-4">

            <div className="business-header card border-0 shadow-sm p-4 mb-4">

                <div className="d-flex align-items-center gap-3">

                    <div className="business-icon">
                        <BsGrid3X3GapFill />
                    </div>

                    <div>
                        <h3 className="mb-1">
                            Explore more for business
                        </h3>

                        <p className="text-muted mb-0">
                            Grow your career, business and network with LinkedIn tools
                        </p>
                    </div>

                </div>

            </div>

            <div className="row g-4">

                {
                    businessTools.map((item, index) => (

                        <div className="col-lg-3 col-md-6" key={index}>

                            <div className="card business-card border-0 shadow-sm h-100">

                                <div className="card-body">

                                    <div className="business-tool-icon">
                                        {item.icon}
                                    </div>

                                    <h5>
                                        {item.title}
                                    </h5>

                                    <p>
                                        {item.desc}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

            <div className="company-page-box card border-0 shadow-sm mt-4 p-4">

                <h4>Create a Company Page</h4>

                <p className="text-muted">
                    Build your business presence and connect with professionals.
                </p>

                <button className="btn btn-primary rounded-pill px-4">
                    Create Page
                </button>

            </div>

        </div>

    );
};

export default Business;