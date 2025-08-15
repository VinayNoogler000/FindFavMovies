import MovieCard from "../components/MovieCard";

export default function MoviesGrid({ movies }) {
    return (
        <div className="movies-grid"> 
            { movies.map( (movie) => <MovieCard movie={movie} key={movie.id}/> ) }
        </div>
    );
}