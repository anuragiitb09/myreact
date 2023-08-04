import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import News from './components/News';
import Query from './components/Query';
import Services from './components/Services';
import Login from './components/Login'; // Assuming Login.jsx is in the same directory as App.js

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/news" element={<News />} />
          <Route path="/query" element={<Query />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
