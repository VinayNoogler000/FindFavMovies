import './css/App.css';
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from 'react-router-dom';
import { MovieProvider } from "./contexts/MovieContext";
import Popular from './pages/Popular';
import Favorites from './pages/Favorites';
import NowPlaying from './pages/NowPlaying';

function App() {
  const location = useLocation();

  return (
    <MovieProvider>
      <header>
        <NavBar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Popular key={location.key} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/now-playing" element={<NowPlaying />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
