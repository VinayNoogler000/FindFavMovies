import MovieImage from "./MovieImage";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <MovieImage imgUrl={ movie.imgUrl } movieTitle={ movie.title } />
            <h3 className="movie-title">{ movie.title }</h3>
            <p className="movie-date"> { movie.releaseDate } </p>
            <button className="fav-btn" > 
                
            </button>
        </div>
    );
}