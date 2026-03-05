import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

const users = []

function App() {
  const [page, setPage] = useState('login')
  const [user, setUser] = useState(null)

  const handleSignup = (name, email, password) => {
    const existing = users.find(u => u.email === email)
    if (existing) return { ok: false, message: 'Email already registered' }
    const newUser = { name, email, password }
    users.push(newUser)
    setUser(newUser)
    setPage('dashboard')
    return { ok: true }
  }

  const handleLogin = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) return { ok: false, message: 'Invalid email or password' }
    setUser(found)
    setPage('dashboard')
    return { ok: true }
  }

  if (page === 'login') return <Login setPage={setPage} onLogin={handleLogin} />
  if (page === 'signup') return <Signup setPage={setPage} onSignup={handleSignup} />
  if (page === 'dashboard') return <Dashboard setPage={setPage} user={user} />
}

export default App