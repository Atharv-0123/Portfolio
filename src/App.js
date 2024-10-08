import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Projects from './routes/Projects';

function App() {
  return (
      <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </div>
  );
}

export default App;
