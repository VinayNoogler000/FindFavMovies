import "../css/Home.css";
import SearchContent from "../components/SearchContent";
import MoviesGrid from "../components/MoviesGrid";
import { useState, useEffect, use } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const loadPopularMovies = async () => {
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
        }

        loadPopularMovies();
    }, []);

    return (
        <div className="home-page">
            <SearchContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} isLoading={loading} setLoading={setLoading} setMovies={setMovies} />

            { error && <div className="error-msg"> {error} </div> }

            { loading ? <div className="loading">Loading...</div> : <MoviesGrid movies={movies} /> }
        </div>
    );
}