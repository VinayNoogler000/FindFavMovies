import FavButton from "./FavButton";

export default function MoviePoster({ imgUrl, title }) {
    return (
        <div className="movie-poster">
            <img src={import.meta.env.VITE_IMG_BASE_URL + imgUrl} className="movie-img" alt={`${title} image`} loading="lazy"></img>
            
            <div className="movie-overlay">
                <FavButton />
            </div>
        </div>
    );
}