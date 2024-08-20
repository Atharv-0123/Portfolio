import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
// import Navbar from './components/Navbar';

function App() {
  return (
      <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </div>
  );
}

export default App;
