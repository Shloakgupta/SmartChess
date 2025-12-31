import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Home from './components/Home';
import VideoLibrary from './components/VideoLibrary';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<VideoLibrary />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </Router>
  );
}

export default App; 