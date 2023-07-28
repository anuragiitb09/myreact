import React from 'react';
import Analytics from './components/Analytics';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import News from './components/News';
import Query from './components/Query'; // Import the Query component

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <News /> {/* Include the News component */}
      <Query /> {/* Include the Query component */}
      <AboutUs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
