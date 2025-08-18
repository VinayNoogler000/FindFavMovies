import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    // 👇 Initialize the "favorites" state-var with fav-movies-list stored in the Local-Storage (if exists), else with initialize it with an empty array. 
    const [favorites, setFavorites] = useState( localStorage.getItem("favorites") == "undefined" || localStorage.getItem("favorites") == "null" ? [] : JSON.parse(localStorage.getItem("favorites")) );

    //👇 Side-Effect/Callback to Update the Favorites-Movies-List stored in the Local-Storage, everytime the 
    //👇 "favorites" state changes, whether on adding or removing a movie to/from the favorites list.
    useEffect( () => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavs = (movie) => {
        setFavorites( (prevFavs) => [...prevFavs, movie] );
    }

    const removeFromFavs = (movieId) => {
        setFavorites( (prevFavs) => {
            return prevFavs.filter( (favMovie) => favMovie.id !== movieId);
        });
    }

    const isFavorite = (movieId) => {
        return favorites.some( (favMovie) => favMovie.id === movieId);
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