import { useState } from "react";

const useLike = (
    initialLikes = 39,
    initialDislikes = 0
) => {

    const [likes, setLikes] = useState(initialLikes);

    const [dislikes, setDislikes] = useState(initialDislikes);

    const [liked, setLiked] = useState(false);

    const [disliked, setDisliked] = useState(false);



    const handleLike = () => {

  

        if(disliked) {
            setDislikes((prev) => prev - 1);
            setDisliked(false);
        }

  

        if(!liked) {
            setLikes((prev) => prev + 1);
            setLiked(true);
        }
        else {
            setLikes((prev) => prev - 1);
            setLiked(false);
        }
    };

   

    const handleDislike = () => {

     

        if(liked) {
            setLikes((prev) => prev - 1);
            setLiked(false);
        }



        if(!disliked) {
            setDislikes((prev) => prev + 1);
            setDisliked(true);
        }
        else {
            setDislikes((prev) => prev - 1);
            setDisliked(false);
        }
    };

    return {
        likes,
        dislikes,
        liked,
        disliked,
        handleLike,
        handleDislike
    };
};

export default useLike;