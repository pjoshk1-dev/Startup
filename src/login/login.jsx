import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Please enter both username and password.');
    } else {
      setError('');
      setUsername('');
      setPassword('');
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