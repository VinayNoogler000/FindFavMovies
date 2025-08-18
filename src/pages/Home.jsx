import "../css/Home.css";
import SearchContent from "../components/SearchContent";
import MoviesGrid from "../components/MoviesGrid";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        // IIFE (Immediately Invoked Function Expression) to Load Popular Movies from TheMovieDB API, immediately on Page Load.
        (async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (err) {
                console.log(err);
                setError("Failed to Load Popular Movies! Please try again later...");
            }
            finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="home-page">
            <SearchContent isLoading={loading} setLoading={setLoading} setMovies={setMovies} />

            { error && <div className="error-msg"> {error} </div> }

            { loading ? <div className="loading">Loading...</div> : <MoviesGrid movies={movies} /> }
        </div>
    );
}