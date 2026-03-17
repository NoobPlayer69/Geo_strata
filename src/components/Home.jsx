import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../utils/firebase';

function Home({ user }) {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/game-mode');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleGuestPlay = () => {
    navigate('/game-mode');
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🪨📍</div>
        <h1 className="text-5xl font-bold text-stone-800 mb-2">GeoStrata</h1>
        <p className="text-stone-600 text-lg">Explore the world, layer by layer</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full mb-6">
        <p className="text-stone-700 text-center">
          Test your knowledge of Earth's geology and geography. Identify rock
          formations, mineral deposits, and geological features from around the
          world!
        </p>
      </div>

      {user ? (
        <div className="flex flex-col gap-3 w-full max-w-md">
          <p className="text-stone-700 text-center font-medium">
            Welcome back, {user.displayName || user.email}!
          </p>
          <button
            onClick={() => navigate('/game-mode')}
            className="bg-stone-800 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-stone-700 transition-colors"
          >
            Play Now
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full max-w-md">
          <button
            onClick={handleGoogleSignIn}
            className="bg-stone-800 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-stone-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Sign in with Google</span>
          </button>
          <button
            onClick={handleGuestPlay}
            className="bg-amber-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-amber-500 transition-colors"
          >
            Play as Guest
          </button>
        </div>
      )}

      <div className="mt-8 flex gap-6">
        <Link
          to="/leaderboard"
          className="text-stone-600 underline hover:text-stone-800 transition-colors"
        >
          View Leaderboard
        </Link>
        <a
          href="#how-to-play"
          className="text-stone-600 underline hover:text-stone-800 transition-colors"
        >
          How to Play
        </a>
      </div>
    </div>
  );
}

export default Home;
