import "dotenv/config";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

export const getPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&region=IND`;

    try {
        const response = await axios.get(url);
        return response.data.results; // popular movies list
    } catch (error) {
        console.log(error);
    }
}

export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(url);
        return response.data.results; // searched movies list
    } catch (error) {
        console.log(error);
    }
}