import "../css/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faYoutubeSquare, faSquareLinkedin, faSquareXTwitter, faSquareInstagram, faSquareThreads } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div class="socials">
                <a href="https://github.com/VinayNoogler000/FindFavMovies" target="_blank" rel="noopener noreferrer" title="View GitHub Profile" > <FontAwesomeIcon icon={faGithubSquare} /> </a>
                <a href="https://www.youtube.com/@vinaytambey8250" target="_blank" rel="noopener noreferrer" title="View YouTube Profile"> <FontAwesomeIcon icon={faYoutubeSquare} /> </a>
                <a href="https://www.linkedin.com/in/vinaytambey/" target="_blank" rel="noopener noreferrer" title="View LinkedIn Profile"> <FontAwesomeIcon icon={faSquareLinkedin} /> </a>
                <a href="https://x.com/VinayNoogler000" target="_blank" rel="noopener noreferrer" title="View X/Twitter Profile"> <FontAwesomeIcon icon={faSquareXTwitter} /> </a>
                <a href="https://www.instagram.com/vinaynoogler07" target="_blank" rel="noopener noreferrer" title="View Instagram Profile"> <FontAwesomeIcon icon={faSquareInstagram} /> </a>
                <a href="https://www.threads.com/@vinaynoogler07" target="_blank" rel="noopener noreferrer" title="View Threads Profile"> <FontAwesomeIcon icon={faSquareThreads} /> </a>
            </div>

            <p class="copyright">&copy; 2025 <a href="https://github.com/VinayNoogler000/FindFavMovies" target="_blank" rel="noopener noreferrer" title="View the Codebase on GitHub" >FindFavMovies</a> by <a href="https://www.vinaytambey.bio" target="_blank" rel="noopener noreferrer" title="Visit Vinay's Portfolio Website">Vinay Tambey</a> &nbsp; <br/> All rights reserved.</p>
        </footer>
    );
}