function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.user_metadata?.name}</p>
      <p>{user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Dashboard