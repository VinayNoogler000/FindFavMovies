import MovieCard from "../components/MovieCard";

export default function MoviesGrid({ movies, searchQuery }) {
    return (
        <div className="movies-grid grid grid-cols-3 gap-5">
            {movies.map( (movie) => <MovieCard key={ movie.id } movie={ movie } /> )}
        </div>
    );
}