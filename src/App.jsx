import './css/App.css';
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from "./contexts/MovieContext";
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <MovieProvider>
      <header>
        <NavBar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
