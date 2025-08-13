import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

export default function FavButton() {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLikeStatus = () => {
        setIsLiked( (likeStatus) => !likeStatus );
    }

    return (
        <button className="fav-btn" title="Add To Favorites" onClick={toggleLikeStatus} > 
            <FontAwesomeIcon icon={ isLiked ? solidHeart : regularHeart } color="red" />
        </button>
    );
}