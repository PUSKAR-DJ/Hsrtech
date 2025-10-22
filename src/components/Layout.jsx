import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

// This component will wrap all pages that need the Navbar
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet renders the active child route (Home, About, etc.) */}
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;