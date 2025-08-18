import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MoviesGrid({ movies }) {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    let style;
    if (width >= 880 && width <= 1045 && movies.length === 3) {
        // no-changes in styling of movies-grid
    }
    else if (width >= 880 && movies.length < 4) {
        const columns = movies.length ; // movies-grid-columns
        style = { 
            width: "fit-content",
            gridTemplateColumns: `repeat(${columns}, minmax(300px, 1fr))` 
        }
    }
    

    return (
        <div className="movies-grid" style={style}> 
            { movies.map( (movie) => <MovieCard movie={movie} key={movie.id}/> ) }
        </div>
    );
}