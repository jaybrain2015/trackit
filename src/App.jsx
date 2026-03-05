import { useState, useEffect } from 'react'
import Login from './pages/Login'
import { supabase } from './supabase'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


function App() {
  const [page, setPage] = useState('login')
  const [user, setUser] = useState(null)



    useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user)
        setPage('dashboard')
      }
    })
  }, [])

  const handleSignup = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    })
    if (error) return { ok: false, message: error.message }
    setUser(data.user)
    setPage('dashboard')
    return { ok: true }
  }

 
  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) return { ok: false, message: error.message }
    setUser(data.user)
    setPage('dashboard')
    return { ok: true }
  }
 
  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setPage('login')
  }

  if (page === 'login') return <Login setPage={setPage} onLogin={handleLogin} />
  if (page === 'signup') return <Signup setPage={setPage} onSignup={handleSignup} />
  if (page === 'dashboard') return <Dashboard setPage={setPage} user={user}  onLogout={handleLogout} />
}

export default App