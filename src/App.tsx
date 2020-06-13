import React from 'react';
import Characters from './components/Characters'
import './App.css';
import Houses from "./components/Houses"

function App() {
  return (
    <div className="App">
      <Houses />
      <Characters/>
    </div>
  );
}

export default App;
