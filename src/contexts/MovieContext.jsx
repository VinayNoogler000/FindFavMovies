import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // 👇 Initialize the "favorites" state-var with fav-movies-list stored in the Local-Storage (if exists), else with initialize it with an empty array. 
    const [favorites, setFavorites] = useState(() => {
        try {
            const storedFavs = localStorage.getItem("favorites");
            if (!storedFavs) {
                return [];
            }
            const parsedFavs = JSON.parse(storedFavs);
            return Array.isArray(parsedFavs) ? parsedFavs : []; // Ensure the parsed data is an array
        } catch (error) {
            console.warn('Error parsing favorites from localStorage:', error);
            localStorage.removeItem("favorites"); // Clear invalid data from localStorage
            return [];
        }
    });

    //👇 Side-Effect/Callback to Update the Favorites-Movies-List stored in the Local-Storage, everytime the 
    //👇 "favorites" state changes, whether on adding or removing a movie to/from the favorites list.
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavs = (movie) => {
        // Ensure movie has a valid ID before adding
        if (!movie || (movie.id === undefined && movie.id !== 0)) {
            console.warn('Cannot add movie to favorites: Invalid movie object or missing ID');
            return;
        }
        setFavorites((prevFavs) => {
            const currentFavs = Array.isArray(prevFavs) ? prevFavs : []; // Ensure prevFavs is an array before spreading
            return [...currentFavs, movie];
        });
    }

    const removeFromFavs = (movieId) => {
        // Handle cases where movieId is undefined, null, or invalid
        if (!movieId && movieId !== 0) {
            return;
        }
        setFavorites((prevFavs) => {
            // Ensure prevFavs is an array before calling .filter()
            const currentFavs = Array.isArray(prevFavs) ? prevFavs : [];
            return currentFavs.filter((favMovie) => {
                // Ensure both IDs exist and are of the same type for comparison
                return (favMovie && (favMovie.id !== undefined) && (favMovie.id !== null) && (String(favMovie.id) !== String(movieId)));
            });
        });
    }

    const isFavorite = (movieId) => {
        // Handle cases where movieId is undefined, null, or invalid
        if (!movieId && movieId !== 0) {
            return false;
        }
        // Ensure favorites is an array before calling .some()
        if (!Array.isArray(favorites)) {
            return false;
        }
        return favorites.some((favMovie) => {
            // Ensure both IDs exist and are of the same type for comparison
            return (favMovie && (favMovie.id !== undefined) && (favMovie.id !== null) && (String(favMovie.id) === String(movieId)));
        });
    }

    const value = {
        favorites,
        addToFavs,
        removeFromFavs,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}