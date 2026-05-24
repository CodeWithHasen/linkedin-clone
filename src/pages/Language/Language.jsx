import '../../assets/styles/page-design.scss';

const Language = () => {
    return(
        <div className="page-wrapper">
            <div className="page-card">
                <h2 className="page-title">Language Preferences</h2>
                <p className="page-subtitle">
                    Select your preferred application language.
                </p>

                <div className="info-box">
                    <h5>English</h5>
                    <p>Default application language.</p>
                </div>

                <div className="info-box">
                    <h5>Hindi</h5>
                    <p>Switch to Hindi language support.</p>
                </div>
            </div>
        </div>
    );
};

export default Language;