import MovieImage from "./MovieImage";
import FavButton from "./FavButton";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <MovieImage imgUrl={ movie.imgUrl } movieTitle={ movie.title } />
            <h3 className="movie-title">{ movie.title }</h3>
            <p className="movie-date"> { movie.releaseDate } </p>
            <FavButton />
        </div>
    );
}