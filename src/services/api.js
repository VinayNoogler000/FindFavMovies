import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&region=IN`;

    try {
        const response = await axios.get(url);
        return response.data.results; // popular movies list
    } catch (error) {
        console.log("Error in Getting Popular Movies from the API", error);
    }
}

export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(url);
        return response.data.results; // searched movies list
    } catch (error) {
        console.log("Error in Getting Searched Movies from the API", error);
    }
}

export const getNowPlayingMovies = async (query) => {
    const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=IN`;

    try {
        const response = await axios.get(url);
        return response.data.results; // now playing movies list
    } catch (error) {
        console.log("Error in Getting the Now Playing Movies in Theatres, from the API", error);
    }
}

export const getTopRatedMovies = async (query) => {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&region=IN`;

    try {
        const response = await axios.get(url);
        return response.data.results; // top rated movies list
    } catch (error) {
        console.log("Error in Getting the Top Rated Movies from the API", error);
    }
}

export const getUpcomingMovies = async (query) => {
    const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&region=IN`;

    try {
        const response = await axios.get(url);
        return response.data.results; // upcoming movies list
    } catch (error) {
        console.log("Error in Getting the Upcoming Movies from the API", error);
    }
}