import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TestingComponents from './pages/TestingComponents';
import AboutMe from './pages/AboutMe';
import GithubPage from './pages/projectPosts/GitHubPage';
import Toohak from './pages/projectPosts/Toohak';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/github-page" Component={ Home } />
        <Route path="/about-me" Component={ AboutMe } />
        <Route path="/book-reviews" Component={ Projects } />
        <Route path="/projects" Component={ Projects } />
        <Route path="/projects/github-page" Component={ GithubPage } />
        <Route path="/projects/toohak" Component={ Toohak } />
        <Route path="/testing" Component={ TestingComponents } />
      </Routes>
    </Router>
  );
}

export default App;
