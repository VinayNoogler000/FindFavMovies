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
        const navMenu = document.querySelector(".nav-menu");

        let showPosition;
        if (viewportWidth <= 450) {
                showPosition = "61px";
        }
        else if (viewportWidth > 450 && viewportWidth <= 576) {
            showPosition = "64px";
        }
        else if (viewportWidth <= 768) {
            showPosition = "64px";
        }
        else {
            showPosition = "68px";
        }

        navMenu.style.top = navMenu.style.top === "-105px" ? showPosition : "-105px";
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
                { viewportWidth >= 820 ?  
                    <>
                        <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </ Link>
                        <Link to="/top-rated" className="nav-link" title="Top Rated Movies"> Top Rated </ Link>
                        <Link to="/upcoming" className="nav-link" title="Upcoming Movies"> Upcoming </ Link>
                    </>
                : 
                <button className="menu-btn" title="Show Navigation Menu" onClick={toggleNavMenu}>
                    <FontAwesomeIcon icon={faSquareCaretDown} />
                </button>
                }
            </div>
        </nav>
        
        { viewportWidth < 820 && 
        <div className="nav-menu">
            <Link to="/now-playing" className="nav-link" title="Movies Now Playing in Theatres"> Now Playing </ Link>
            <Link to="/top-rated" className="nav-link" title="Top Rated Movies"> Top Rated </ Link>
            <Link to="/upcoming" className="nav-link" title="Upcoming Movies"> Upcoming </ Link>
        </div>
        }
        </>
    );
}