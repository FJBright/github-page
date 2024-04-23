import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/projects" Component={ Projects } />
      </Routes>
    </Router>
  );
}

export default App;
