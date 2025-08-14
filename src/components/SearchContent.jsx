import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchContent({ searchQuery, setSearchQuery }) {
    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchQuery);
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