import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;
