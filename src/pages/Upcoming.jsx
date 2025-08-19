import "../css/Upcoming.css";
import { useState, useEffect } from "react";
import { getUpcomingMovies } from "../services/api";
import SearchContent from "../components/SearchContent";
import MoviesGrid from "../components/MoviesGrid";

export default function NowPlaying() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression) to Load Now-Playing Movies from TheMovieDB API, immediately on Page Load.
        (async () => {
            try {
                const upcomingMovies = await getUpcomingMovies();
                if (upcomingMovies) setMovies(upcomingMovies);
                else throw err;
            } 
            catch (err) {
                setError("Failed to Load Upcoming Movies! Please try again later...");
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
            <div className="now-playing-page">
                <SearchContent isLoading={loading} setLoading={setLoading} setMovies={setMovies} />

                <h2>Upcoming Movies</h2>

                { error && <div className="error-msg"> {error} </div> }

                { loading ? <div className="loading">Loading...</div> : <MoviesGrid movies={movies} /> }
            </div>
    );
}