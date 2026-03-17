import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import Home from './components/Home';
import GameMode from './components/GameMode';
import ClassicMode from './components/ClassicMode';
import ListMode from './components/ListMode';
import Summary from './components/Summary';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <div className="text-4xl animate-pulse">🪨📍</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#F5F0E8]">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/game-mode" element={<GameMode user={user} />} />
          <Route path="/classic" element={<ClassicMode user={user} />} />
          <Route path="/list" element={<ListMode user={user} />} />
          <Route path="/summary" element={<Summary user={user} />} />
          <Route path="/leaderboard" element={<Leaderboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
