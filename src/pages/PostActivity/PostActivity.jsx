import '../../assets/styles/page-design.scss';

const PostActivity = () => {
    return(
        <div className="page-wrapper">
            <div className="page-card">
                <h2 className="page-title">Post Activity</h2>
                <p className="page-subtitle">
                    Monitor your recent post engagement.
                </p>

                <div className="info-box">
                    <h5>Likes</h5>
                    <p>See who liked your posts.</p>
                </div>

                <div className="info-box">
                    <h5>Comments</h5>
                    <p>Manage discussions on your posts.</p>
                </div>

                <div className="info-box">
                    <h5>Shares</h5>
                    <p>Track how your content is shared.</p>
                </div>
            </div>
        </div>
    );
};

export default PostActivity;