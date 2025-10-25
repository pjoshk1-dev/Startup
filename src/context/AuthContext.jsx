import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

const login = (username, password) => {
  const normalizedUsername = username.trim().toLowerCase();
  if (normalizedUsername && password.trim()) {
    setUser({ username: normalizedUsername });
    return true;
  }
  return false;
};

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);