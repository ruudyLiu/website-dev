import logo from './logo.png';
import './App.css';
import { useState } from 'react';

const website_url = "https://ruudyliu.wixsite.com/ruudyliu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <a
          className="App-link"
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ruudy Liu's Website
        </a>
      </header>
    </div>
  );
}

export default App;
