import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <MoviePoster imgUrl={ movie.imgUrl } title={ movie.title } />
            <MovieInfo title={ movie.title } date={ movie.releaseDate } />
        </div>
    );
}