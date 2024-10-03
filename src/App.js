import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';
import RingDoorbell from './pages/SmartHomeGuides/RingDoorbell';
import SmartHomeGuides from './pages/SmartHomeGuides/SmartHomeGuides';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/smarthomeguides" element={<SmartHomeGuides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ringdoorbell" element={<RingDoorbell />} />
        </Routes>
      </div>
  );
}

export default App;
