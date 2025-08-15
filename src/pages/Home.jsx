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
                setError("Error in Loading Popular Movies...!");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    return (
        <div className="home-page">
            <SearchContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <MoviesGrid movies={movies} />
        </div>
    );
}