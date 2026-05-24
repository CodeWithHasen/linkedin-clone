import '../../assets/styles/page-design.scss';

const Settings = () => {
    return(
        <div className="page-wrapper">
            <div className="page-card">
                <h2 className="page-title">Settings & Privacy</h2>
                <p className="page-subtitle">
                    Manage your profile and account preferences.
                </p>

                <div className="info-box">
                    <h5>Profile Settings</h5>
                    <p>Edit profile details and profile image.</p>
                </div>

                <div className="info-box">
                    <h5>Security</h5>
                    <p>Update password and secure login.</p>
                </div>

                <div className="info-box">
                    <h5>Notifications</h5>
                    <p>Customize email and activity notifications.</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;