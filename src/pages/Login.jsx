import { useState } from 'react'

function Login({ setPage, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!email) e.email = 'Email is required'
    if (!password) e.password = 'Password is required'
    return e
  }

  const handleLogin = async () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    const result = await onLogin(email, password)
    if (!result.ok) setErrors({ api: result.message })
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">TrackIt</h1>
          <p className="text-gray-400 mt-2 text-sm">Sign in f</p>
        </div>

        {errors.api && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {errors.api}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mt-2"
          >
            Sign in
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          No account?{' '}
          <button
            onClick={() => setPage('signup')}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login