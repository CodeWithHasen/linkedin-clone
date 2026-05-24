import '../../assets/styles/page-design.scss';

const Help = () => {
    return(
        <div className="page-wrapper">
            <div className="page-card">
                <h2 className="page-title">Help Center</h2>
                <p className="page-subtitle">
                    Find support and account assistance.
                </p>

                <div className="info-box">
                    <h5>Account Recovery</h5>
                    <p>Recover and secure your account easily.</p>
                </div>

                <div className="info-box">
                    <h5>Privacy Support</h5>
                    <p>Manage visibility and profile privacy.</p>
                </div>

                <div className="info-box">
                    <h5>Community Guidelines</h5>
                    <p>Learn about platform rules and policies.</p>
                </div>
            </div>
        </div>
    );
};

export default Help;