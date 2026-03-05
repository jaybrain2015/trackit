function Dashboard({ user, onLogout }) {
  const name = user.user_metadata?.name || user.email

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold">TrackIt</span>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">{user.email}</span>
          <button
            onClick={onLogout}
            className="text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {name} 👋</h1>
        <p className="text-gray-400 mb-10">Here's your TrackIt dashboard.</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm mb-1">Applications</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm mb-1">Interviews</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm mb-1">Offers</p>
            <p className="text-3xl font-bold text-green-400">0</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard