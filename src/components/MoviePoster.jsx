import FavButton from "./FavButton";

export default function MoviePoster({ imgUrl, movieTitle }) {
    return (
        <div className="movie-poster">
            <img src={imgUrl} className="movie-img" alt={movieTitle + "image"} loading="lazy"></img>
            <FavButton />
        </div>
    );
}