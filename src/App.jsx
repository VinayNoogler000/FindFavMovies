import './App.css'
import MovieCard from "./components/MovieCard";

function App() {
  const movie = {
    imgUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/jT8sUpBrqgQpHWuUukpAmWdyJzD.jpg",
    title: "Alien Earth",
    releaseDate: "Aug 12, 2025"
  }

  return <MovieCard movie={movie} />
}

export default App
