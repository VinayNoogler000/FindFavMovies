import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchContent({ searchQuery, setSearchQuery }) {
    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchQuery);
    }

    return (
        <form className="content-search-form" onSubmit={handleSearch}>
            <label htmlFor="search-inp"> Search </label>
            <input type="text" id="search-inp" placeholder="Search for movies/shows..." name="content" value={searchQuery} onChange={ (e) => setSearchQuery(e.target.value) } required></input>
            <button type="submit" title="Search Movies/Shows" className="search-btn"> 
                <FontAwesomeIcon icon={faSearch} /> 
            </button> 
        </form>
    );
}