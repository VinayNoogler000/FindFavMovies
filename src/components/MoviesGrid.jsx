import MovieCard from "../components/MovieCard";

export default function MoviesGrid({ movies, searchQuery }) {
    return (
        <div className="movies-grid"> 
            {movies.map( (movie) => <MovieCard key={ movie.id } movie={ movie } /> )}
        </div>
    );
}