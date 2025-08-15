import FavButton from "./FavButton";

export default function MoviePoster({ imgUrl, title }) {
    return (
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} className="movie-img" alt={`${title} image`} loading="lazy"></img>
            
            <div className="movie-overlay">
                <FavButton />
            </div>
        </div>
    );
}