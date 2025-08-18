import { useMovieContext } from "../contexts/MovieContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

export default function FavButton({ movie }) {
    const { isFavorite, addToFavs, removeFromFavs } = useMovieContext();

    const toggleLikeStatus = (e) => {
        if ( isFavorite(movie.id) ) {
            removeFromFavs(movie.id);
        } 
        else {
            addToFavs(movie);
        }
    }

    return (
        <button className="favorite-btn" title="Add To Favorites" onClick={toggleLikeStatus} > 
            <FontAwesomeIcon icon={ isFavorite(movie.id) ? solidHeart : regularHeart } color="red" />
        </button>
    );
}