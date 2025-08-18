import "../css/MovieCard.css";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <MoviePoster movie={ movie } />
            <MovieInfo title={ movie.title } date={ movie.release_date } />
        </div>
    );
}