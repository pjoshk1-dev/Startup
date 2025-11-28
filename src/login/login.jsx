import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation (same behavior as before)
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      // Backend request
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      // Handle backend errors
      if (!res.ok || !data.success) {
        setError(data.message || 'Invalid username or password.');
        return;
      }

      // Backend approved → use existing AuthContext login
      login(username);

      // Reset fields + error (same behavior as before)
      setError('');
      setUsername('');
      setPassword('');

    } catch (err) {
      setError('Server error. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div>
      {!user ? (
        <>
          <h2>Login to save data and connect</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="field"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <input
                className="field"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button className="field" type="submit">
              Login
            </button>

            <button
              className="field"
              type="button"
              onClick={() => alert('Create account coming soon!')}
            >
              Create
            </button>
          </form>
        </>
      ) : (
        <div className="user-panel">
          <h2>Welcome, {user.username}!</h2>
          <button className="field" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
