function Dashboard({ user, setPage }) {
  const handleLogout = () => {
    setPage('login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard