import "../css/NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"> FindFavMovies </Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="nav-link" title="Popular Movies"> Popular </Link>
                <Link to="/favorites" className="nav-link" title="Your Favorite Movies"> Favorites </Link>
                <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </Link>
            </div>
        </nav>
    );
}