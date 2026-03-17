function App() {
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

      <div className="flex flex-col gap-3 w-full max-w-md">
        <button className="bg-stone-800 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-stone-700 transition-colors">
          Sign in with Google
        </button>
        <button className="bg-amber-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-amber-500 transition-colors">
          Play as Guest
        </button>
      </div>

      <div className="mt-8">
        <a
          href="#leaderboard"
          className="text-stone-600 underline hover:text-stone-800 transition-colors"
        >
          View Leaderboard
        </a>
      </div>
    </div>
  )
}

export default App
