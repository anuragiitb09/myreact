import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Analytics from './components/Analytics';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import News from './components/News';
import Query from './components/Query';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Hero />} /> {/* Use the element prop */}
          <Route path="/analytics" element={<Analytics />} /> {/* Use the element prop */}
          <Route path="/news" element={<News />} /> {/* Use the element prop */}
          <Route path="/query" element={<Query />} /> {/* Use the element prop */}
          <Route path="/about" element={<AboutUs />} /> {/* Use the element prop */}
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
