import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClassicMode({ user }) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 5;

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate('/summary');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-stone-800">Classic Mode</h1>
          <span className="text-stone-600 text-sm">
            Question {currentQuestion} / {totalQuestions}
          </span>
        </div>

        <div className="bg-stone-300 rounded-2xl h-64 flex items-center justify-center mb-6">
          <p className="text-stone-600 text-lg">🪨 Geological image will appear here</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">
            What type of rock formation is this?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {['Igneous', 'Sedimentary', 'Metamorphic', 'Volcanic'].map((option) => (
              <button
                key={option}
                className="bg-stone-100 hover:bg-amber-100 border-2 border-stone-200 hover:border-amber-400 text-stone-800 py-3 px-4 rounded-xl transition-colors font-medium"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/game-mode')}
            className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-800 py-3 rounded-xl font-semibold transition-colors"
          >
            Quit
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-stone-800 hover:bg-stone-700 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            {currentQuestion < totalQuestions ? 'Next →' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassicMode;
