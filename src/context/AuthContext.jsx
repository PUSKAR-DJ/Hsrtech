import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('authToken');
    return !!token; // true if token exists
  });

  const login = (token) => {
    localStorage.setItem('authToken', token); // Store the token
    console.log("User logged in! Token stored.");
    setIsAuthenticated(true);
  };

  // We'll call this from our Navbar
  const logout = () => {
    localStorage.removeItem('authToken');
    console.log("User logged out! Token removed.");
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};