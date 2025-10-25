import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuth();

  // If not logged in, redirect to home
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the nested route (the protected page)
  return <Outlet />;
};

export default ProtectedRoute;