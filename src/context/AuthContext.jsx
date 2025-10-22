import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // We'll call this from our Login page
  const login = () => {
    // In a real app, this would happen after a successful API call
    console.log("User logged in!");
    setIsAuthenticated(true);
  };

  // We'll call this from our Navbar
  const logout = () => {
    console.log("User logged out!");
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};