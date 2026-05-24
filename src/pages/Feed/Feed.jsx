import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/posts/postSlice';
import CreatePost from "../../components/feed/CreatePost/CreatePost";
import PostCard from "../../components/feed/PostCard/PostCard";

const Feed = () => {
    const dispatch = useDispatch();

    const { items, loading } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        dispatch(fetchPosts());
    },[dispatch]);

    return(
        <div className="mt-4">

            <CreatePost />

            {loading ? (
                <h3>Loading...</h3>
            ) : (
                items.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default Feed;