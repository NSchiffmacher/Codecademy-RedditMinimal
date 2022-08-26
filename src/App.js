import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Posts } from './features/posts/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/r/:subreddit_no_r_param" element={<Posts />} />
          <Route path="/:subreddit_param" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
