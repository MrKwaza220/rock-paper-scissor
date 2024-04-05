import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Singleplayer from './components/singleplayer/Singleplayer';
import Multiplplayer from './components/multiplayer/Multiplayer';
import Creategame from './components/creategame/Creategame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single_player" element={<Singleplayer />} />
        <Route path="/multiplayer" element={<Multiplplayer></Multiplplayer>} />
        <Route path="/create_multiplayer" element={<Creategame></Creategame>} />
      </Routes>
    </Router>
  );
}

export default App;
