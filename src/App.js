import React from 'react';
import logo from './logo.svg';
import {Main} from './MainComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main />
    </div>
  );
}

export default App;
