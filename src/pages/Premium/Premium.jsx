import {
    BsCheckCircleFill,
    BsStars
} from 'react-icons/bs';

import './Premium.scss';

const Premium = () => {

    const premiumFeatures = [
        'See jobs where you’d be a top applicant',
        'Directly message recruiters with InMail',
        'Get cover letter and resume tips',
        'Join live talks with career experts'
    ];

    return (

        <div className="premium-page container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card premium-card border-0 shadow-lg">

                        <div className="premium-banner">

                            <BsStars className="premium-star" />

                            <h2>
                                Hasen, job search smarter
                            </h2>

                            <p>
                                Badal and millions of other members use Premium
                            </p>

                        </div>

                        <div className="card-body p-5">

                            <div className="premium-features">

                                {
                                    premiumFeatures.map((feature, index) => (

                                        <div
                                            className="feature-item"
                                            key={index}
                                        >

                                            <BsCheckCircleFill />

                                            <span>
                                                {feature}
                                            </span>

                                        </div>

                                    ))
                                }

                            </div>

                            <div className="premium-action text-center mt-5">

                                <button className="btn premium-btn">
                                    Try 1 month of Premium for ₹0
                                </button>

                                <p className="mt-3 text-muted small">
                                    1-month free trial. Cancel whenever.
                                    We’ll remind you 7 days before your trial ends.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Premium;