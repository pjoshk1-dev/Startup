import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');  // success/create messages
  const { user, login, logout } = useAuth();

  // 🔹 Login Handler (uses backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      // Call your existing auth context logic
      login(username, password);

      setUsername('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setError('Server error.');
    }
  };

  // 🔹 Create Account Handler (also uses backend)
  const handleCreateAccount = async () => {
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/auth/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Account creation failed');
        return;
      }

      setMessage('Account created! You can now log in.');
      setUsername('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setError('Server error.');
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
            {message && <p style={{ color: 'green' }}>{message}</p>}

            <button className="field" type="submit">
              Login
            </button>

            {/* 🔹 NEW: Create account using backend */}
            <button
              className="field"
              type="button"
              onClick={handleCreateAccount}
            >
              Create
            </button>
          </form>
        </>
      ) : (
        <div className="user-panel">
          <h2>Welcome, {user.username}!</h2>
          <button className="field" onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
