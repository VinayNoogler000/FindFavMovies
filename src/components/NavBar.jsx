import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar sticky top-0 w-full h-fit flex justify-between items-center gap-5 mb-5">
            <div className="navbar-brand">
                <Link to="/"> FindFavMovies </Link>
            </div>

            <div className="navbar-links flex gap-3">
                <Link to="/" className="nav-link"> Home </Link>
                <Link to="/favorites" className="nav-link"> Favorites </Link>
            </div>
        </nav>
    );
}