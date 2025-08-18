import { useMovieContext } from "../contexts/MovieContext";
import MoviesGrid from "../components/MoviesGrid";
import "../css/Favorites.css";

export default function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites-page">
            <h2>Your Favorite Movies</h2>

            { favorites.length > 0 ? 
            <MoviesGrid movies={favorites} /> 
            :
            <div className="favorites-empty">
                <h3>No Favorite Movies Yet</h3>
                <p>Start adding your favorite movies and they'll appear here!</p>
            </div>
            }
        </div>
        
    );
}