import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// We don't need a separate CSS file for this layout,
// we can use the class from App.css.

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* Apply the new class here. 
        This will wrap Home, About, Services, etc. 
      */}
      <main className="main-content-layout">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;