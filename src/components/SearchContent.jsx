import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchMovies } from '../services/api';

export default function SearchContent({ searchQuery, setSearchQuery, isLoading, setLoading, setMovies }) {
    const handleSearch = async (event) => {
        event.preventDefault();
        
        if (searchQuery.trim() === "" || isLoading === true) return;
        else {
            setLoading(true);
            
            try {
                const movies = await searchMovies(searchQuery);
                setMovies(movies);
            }
            catch(err) {
                setError("Failed to Search Movies! Please try again later...");
                console.log(err);
            }
            finally {
                setSearchQuery("");
                setLoading(false);
            }
        }
    }

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input type="text" className="search-input" placeholder="Search for movies/shows..." name="content" value={searchQuery} onChange={ (e) => setSearchQuery(e.target.value) } required></input>
            <button type="submit" title="Search Movies/Shows" className="search-button"> 
                <FontAwesomeIcon icon={faSearch} /> 
            </button> 
        </form>
    );
}