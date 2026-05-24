import '../../assets/styles/page-design.scss';

const JobPosting = () => {
    return(
        <div className="page-wrapper">
            <div className="page-card">
                <h2 className="page-title">Job Posting Account</h2>
                <p className="page-subtitle">
                    Manage recruiter tools and job listings.
                </p>

                <div className="info-box">
                    <h5>Create New Job</h5>
                    <p>Post new opportunities for candidates.</p>
                </div>

                <div className="info-box">
                    <h5>Applicants</h5>
                    <p>Track and manage job applications.</p>
                </div>

                <div className="info-box">
                    <h5>Analytics</h5>
                    <p>View performance of job listings.</p>
                </div>
            </div>
        </div>
    );
};

export default JobPosting;