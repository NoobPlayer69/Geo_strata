import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <nav className="bg-stone-800 text-white px-6 py-3 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:text-amber-400 transition-colors">
        <span>🪨📍</span>
        <span>GeoStrata</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/leaderboard" className="text-stone-300 hover:text-white transition-colors text-sm">
          Leaderboard
        </Link>
        {user ? (
          <div className="flex items-center gap-3">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-8 h-8 rounded-full border-2 border-amber-400"
              />
            )}
            <span className="text-stone-300 text-sm">{user.displayName || user.email}</span>
            <button
              onClick={handleSignOut}
              className="bg-stone-700 hover:bg-stone-600 text-white text-sm px-3 py-1 rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/"
            className="bg-amber-600 hover:bg-amber-500 text-white text-sm px-3 py-1 rounded-lg transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
