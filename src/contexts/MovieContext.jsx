import { createContext, useState, useContext, useEffect, use } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => { 
    const [favorites, setFavorites] = useState([]);

    //👇 Side-Effect/Callback to update the "favorites" state variable by getting and assigning the Fav-Movies-List 
    //👇 from the Local-Storage, everytime the component is rendered for the first time, upon on page load.
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

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