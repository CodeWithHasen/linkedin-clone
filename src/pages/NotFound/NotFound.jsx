import { Link } from 'react-router-dom';
import { BsExclamationTriangle, BsArrowLeft, BsHouseDoorFill } from 'react-icons/bs';

import './notfound.scss';

const NotFound = () => {
    return(
        <div className="notfound-page">
            <div className="notfound-card card border-0 shadow-lg">

                <div className="error-icon">
                    <BsExclamationTriangle />
                </div>

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    The page you are looking for might have been removed,
                    renamed, or is temporarily unavailable.
                </p>

                <div className="notfound-actions">

                    <Link to="/" className="btn btn-primary">
                        <BsHouseDoorFill />
                        Go To Home
                    </Link>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => window.history.back()}
                    >
                        <BsArrowLeft />
                        Go Back
                    </button>

                </div>

            </div>
        </div>
    );
};

export default NotFound;