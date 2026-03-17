import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameMode({ user }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-stone-800 mb-2">Choose Game Mode</h1>
        <p className="text-stone-600">Select how you want to play GeoStrata</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div
          onClick={() => navigate('/classic')}
          className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          <div className="text-4xl mb-3">🌍</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Classic Mode</h2>
          <p className="text-stone-600">
            Identify geological features from images. Earn points based on accuracy and speed.
          </p>
        </div>

        <div
          onClick={() => navigate('/list')}
          className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          <div className="text-4xl mb-3">📋</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">List Mode</h2>
          <p className="text-stone-600">
            Answer a curated list of geology questions. Perfect for studying and practice.
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-8 text-stone-600 hover:text-stone-800 underline transition-colors"
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default GameMode;
