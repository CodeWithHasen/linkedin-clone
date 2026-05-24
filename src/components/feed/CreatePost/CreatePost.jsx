
const CreatePost = () => {
    return(
        <div className="card p-3 mb-4">
            <textarea
                className="form-control"
                rows="3"
                placeholder="Start a post">
            </textarea>
            <button className="btn btn-primary mt-3">
                Post
            </button>
        </div>
    );
};

export default CreatePost;