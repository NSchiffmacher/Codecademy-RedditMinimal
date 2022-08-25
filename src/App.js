import React from 'react';
import './App.css';

import { Header } from './components/header/Header';
import { Posts } from './features/posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />

      <Posts />
    </div>
  );
}

export default App;
