import { useState } from 'react'

function Signup({ setPage, onSignup }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [errors, setErrors] = useState({})

    const validate = () => {
    const e = {}
    if (!name) e.name = 'Name is required'
    if (!email) e.email = 'Email is required'
    if (!password) e.password = 'Password is required'
    if (!confirmPass) e.confirmPass = 'confirm password is required'
    if( password !== confirmPass) e.invalidpass ='password and configm not same'
    if (password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSignup = () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    const result = onSignup(name, email, password)
    if (!result.ok) setErrors({ api: result.message })
  }
  


  return (
     <div>
      <h1>Signup</h1>
        {errors.api && <p>{errors.api}</p>}

     <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p>{errors.name}</p>}



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

       <input
        type="password"
        placeholder="confirm Password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />

      <button onClick={handleSignup}>Sign in</button>
      <p> account? <button onClick={() => setPage('login')}>Sign In</button></p>
    </div>
  )
}

export default Signup