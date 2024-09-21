import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://ruudyliu.wixsite.com/ruudyliu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portofio Website
        </a>
      </header>
    </div>
  );
}

export default App;
