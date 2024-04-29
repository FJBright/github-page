import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TestingComponents from './pages/TestingComponents';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/github-page" Component={ Home } />
        <Route path="/about-me" Component={ AboutMe } />
        <Route path="/projects" Component={ Projects } />
        <Route path="/testing" Component={ TestingComponents } />
      </Routes>
    </Router>
  );
}

export default App;
