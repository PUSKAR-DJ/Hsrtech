import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Products /> */}
      <Contact />
    </div>
  );
}

export default App;
