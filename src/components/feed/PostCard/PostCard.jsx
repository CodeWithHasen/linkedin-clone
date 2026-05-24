import {
    BsHandThumbsUp,
    BsHandThumbsUpFill,
    BsHandThumbsDown,
    BsHandThumbsDownFill,
    BsChatDots,
    BsRepeat,
    BsSend,
    BsGlobeCentralSouthAsia
} from "react-icons/bs";

import useLike from "../../../hooks/useLike";

import profileImage from "../../../assets/images/hasen-profile.jpg";

import "./PostCard.scss";

const PostCard = ({ post }) => {

    const {
        likes,
        dislikes,
        liked,
        disliked,
        handleLike,
        handleDislike
    } = useLike(post.likes || 39, 0);

    return (

        <div className="card post-card mb-4 shadow-sm border-0">

            <div className="card-body">

           

                <div className="d-flex align-items-start mb-3">

                    <img
                        src={profileImage}
                        alt="profile"
                        className="post-profile-img me-3"
                    />

                    <div className="flex-grow-1">

                        <h6 className="mb-0 fw-bold">
                            Hasen Ali
                        </h6>

                        <small className="text-muted d-block">
                            Full Stack Developer | React | Angular
                        </small>

                        <small className="text-muted d-flex align-items-center gap-1">

                            2h • <BsGlobeCentralSouthAsia />

                        </small>

                    </div>

                </div>

                
                <h6 className="fw-bold mb-2">
                    {post.title}
                </h6>

                <p className="text-muted mb-3">
                    {post.body}
                </p>

                
                {
                    post.image && (
                        <img
                            src={post.image}
                            alt="post"
                            className="post-banner-img"
                        />
                    )
                }

                
                <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2 mt-3">

                    <div className="d-flex align-items-center gap-3">

                        <small className="text-muted">

                            <i className="bi bi-hand-thumbs-up-fill text-primary me-1"></i>

                            {likes} Likes

                        </small>

                        <small className="text-muted">

                            <i className="bi bi-hand-thumbs-down-fill text-danger me-1"></i>

                            {dislikes} Dislikes

                        </small>

                    </div>

                    <small className="text-muted">
                        34 Comments
                    </small>

                </div>

                
                <div className="d-flex align-items-center justify-content-between flex-wrap">

                    <button
                        className={`btn post-action-btn ${
                            liked ? "liked-btn" : ""
                        }`}
                        onClick={handleLike}
                    >

                        {
                            liked
                                ? <BsHandThumbsUpFill className="me-2" />
                                : <BsHandThumbsUp className="me-2" />
                        }

                        Like

                    </button>

                    <button
                        className={`btn post-action-btn ${
                            disliked ? "disliked-btn" : ""
                        }`}
                        onClick={handleDislike}
                    >

                        {
                            disliked
                                ? <BsHandThumbsDownFill className="me-2" />
                                : <BsHandThumbsDown className="me-2" />
                        }

                        Dislike

                    </button>

                    <button className="btn post-action-btn">
                        <BsChatDots className="me-2" />
                        Comment
                    </button>

                    <button className="btn post-action-btn">
                        <BsRepeat className="me-2" />
                        Repost
                    </button>

                    <button className="btn post-action-btn">
                        <BsSend className="me-2" />
                        Send
                    </button>

                </div>

            </div>

        </div>

    );
};

export default PostCard;