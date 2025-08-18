import './css/App.css';
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from 'react-router-dom';
import { MovieProvider } from "./contexts/MovieContext";
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const location = useLocation();

  return (
    <MovieProvider>
      <header>
        <NavBar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home key={location.key} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
