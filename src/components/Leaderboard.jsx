import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockLeaderboard = [
  { rank: 1, name: 'GeoMaster', score: 9850, games: 42 },
  { rank: 2, name: 'RockHound', score: 8720, games: 35 },
  { rank: 3, name: 'StrataStar', score: 7650, games: 28 },
  { rank: 4, name: 'MineralMind', score: 6540, games: 21 },
  { rank: 5, name: 'CrystalSeeker', score: 5430, games: 18 },
];

const rankEmoji = { 1: '🥇', 2: '🥈', 3: '🥉' };

function Leaderboard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-800 mb-2">🏆 Leaderboard</h1>
          <p className="text-stone-600">Top GeoStrata players worldwide</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <div className="grid grid-cols-4 bg-stone-800 text-white text-sm font-semibold px-6 py-3">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-right">Score</span>
            <span className="text-right">Games</span>
          </div>
          {mockLeaderboard.map((entry) => (
            <div
              key={entry.rank}
              className="grid grid-cols-4 px-6 py-4 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors"
            >
              <span className="font-bold text-stone-800">
                {rankEmoji[entry.rank] || `#${entry.rank}`}
              </span>
              <span className="text-stone-700 font-medium">{entry.name}</span>
              <span className="text-right text-amber-600 font-semibold">
                {entry.score.toLocaleString()}
              </span>
              <span className="text-right text-stone-500 text-sm">{entry.games}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-800 py-3 rounded-xl font-semibold transition-colors"
          >
            ← Home
          </button>
          <button
            onClick={() => navigate('/game-mode')}
            className="flex-1 bg-stone-800 hover:bg-stone-700 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
