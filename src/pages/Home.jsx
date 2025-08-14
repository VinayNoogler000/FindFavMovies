import SearchContent from "../components/SearchContent";
import MoviesGrid from "../components/MoviesGrid";
import { useState } from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {  
            id: 1, 
            imgUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/jT8sUpBrqgQpHWuUukpAmWdyJzD.jpg",
            title: "Alien Earth",
            releaseDate: "Aug 12, 2025"
        },
        {
            id: 2,
            imgUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
            title: "John Wick",
            releaseDate: "Nov 14, 2014"
        },
        {
            id: 3,
            imgUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/hzXSE66v6KthZ8nPoLZmsi2G05j.jpg",
            title: "The Terminator",
            releaseDate: "Oct 26, 1984"
        }
    ]

    return (
        <div className="home-page">
            <SearchContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <MoviesGrid movies={movies} searchQuery={searchQuery} />
        </div>
    );
}