import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Singleplayer from './components/singleplayer/Singleplayer';
import Multiplplayer from './components/multiplayer/Multiplayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single_player" element={<Singleplayer />} />
        <Route path="/multiplayer" element={<Multiplplayer></Multiplplayer>} />
      </Routes>
    </Router>
  );
}

export default App;
