import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//Import all your components
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />

        {/* You can add a 404 "Not Found" page here later */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;