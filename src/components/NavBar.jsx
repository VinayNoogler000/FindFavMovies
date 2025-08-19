import "../css/NavBar.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setViewportWidth(window.innerWidth);
    });

    const toggleNavMenu = () => {
        console.log("menu toggled");
        const navMenu = document.querySelector(".nav-menu");
        navMenu.style.top = navMenu.style.top === "-105px" ? "60px" : "-105px";
    }

    return (
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"> FindFavMovies </Link>
            </div>

            {/* If Viewport's Width > 576px, then Navbar Links will be shown in expanded form, else they will be shown in compact form as a menu */}
            <div className="navbar-links">
                <Link to="/" className="nav-link" title="Popular Movies"> Popular </Link>
                <Link to="/favorites" className="nav-link" title="Your Favorite Movies"> Favorites </Link>
                { viewportWidth > 576 ?  
                    <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </ Link>
                : 
                <button className="menu-btn" title="Show Navigation Menu" onClick={toggleNavMenu}>
                    <FontAwesomeIcon icon={faSquareCaretDown} />
                </button>
                }
            </div>
        </nav>
        
        { viewportWidth < 576 && 
        <div className="nav-menu">
            <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </ Link>
            {/* <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </ Link>
            <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </ Link> */}
        </div>
        }
        </>
    );
}