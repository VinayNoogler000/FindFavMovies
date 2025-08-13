import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function FavButton() {
    return (
        <button className="fav-btn" > 
            <FontAwesomeIcon icon={faHeart} />
        </button>
    );
}