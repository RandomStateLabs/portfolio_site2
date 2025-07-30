import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroBackground from './components/HeroBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white overflow-x-hidden relative">
        {/* Global Space Background */}
        <div className="fixed inset-0 z-0">
          <HeroBackground />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;