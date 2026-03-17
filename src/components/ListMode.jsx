import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListMode({ user }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = [
    { id: 1, question: 'What is the hardest natural mineral on Earth?', answer: 'Diamond' },
    { id: 2, question: 'What type of rock is formed from cooled lava?', answer: 'Igneous' },
    { id: 3, question: 'What is the name of the supercontinent that existed 300 million years ago?', answer: 'Pangaea' },
    { id: 4, question: 'Which rock type is formed from compressed sediment?', answer: 'Sedimentary' },
    { id: 5, question: 'What scale measures the hardness of minerals?', answer: 'Mohs Scale' },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (value) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate('/summary');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-stone-800">List Mode</h1>
          <span className="text-stone-600 text-sm">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">
            {questions[currentIndex].question}
          </h2>
          <input
            type="text"
            value={answers[currentIndex]}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Type your answer..."
            className="w-full border-2 border-stone-200 focus:border-amber-400 rounded-xl px-4 py-3 text-stone-800 outline-none transition-colors"
          />
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
            {currentIndex < questions.length - 1 ? 'Next →' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListMode;
