import "../css/MovieCard.css";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <MoviePoster imgUrl={ movie.poster_path } title={ movie.title } />
            <MovieInfo title={ movie.title } date={ movie.release_date } />
        </div>
    );
}