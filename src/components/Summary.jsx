import React from 'react';
import { useNavigate } from 'react-router-dom';

function Summary({ user }) {
  const navigate = useNavigate();

  const score = 3;
  const total = 5;
  const percentage = Math.round((score / total) * 100);

  const getRating = () => {
    if (percentage >= 80) return { label: 'Excellent!', emoji: '🥇', color: 'text-amber-600' };
    if (percentage >= 60) return { label: 'Good Job!', emoji: '🥈', color: 'text-stone-600' };
    return { label: 'Keep Practicing!', emoji: '🥉', color: 'text-stone-500' };
  };

  const rating = getRating();

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">{rating.emoji}</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-2">Game Over!</h1>
        <p className={`text-xl font-semibold mb-6 ${rating.color}`}>{rating.label}</p>

        <div className="bg-stone-50 rounded-xl p-6 mb-6">
          <div className="text-5xl font-bold text-stone-800 mb-1">
            {score}/{total}
          </div>
          <div className="text-stone-600">{percentage}% correct</div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/game-mode')}
            className="bg-stone-800 hover:bg-stone-700 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Play Again
          </button>
          <button
            onClick={() => navigate('/leaderboard')}
            className="bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            View Leaderboard
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-stone-600 hover:text-stone-800 underline transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
