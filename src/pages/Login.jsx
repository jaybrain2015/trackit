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

  const handleLogin = () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    const result = onLogin(email, password)
    if (!result.ok) setErrors({ api: result.message })
    
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p>{errors.password}</p>}

      <button onClick={handleLogin}>Sign in</button>
      <p>No account? <button onClick={() => setPage('signup')}>Sign up</button></p>
    </div>
  )
}

export default Login