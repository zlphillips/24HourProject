import React from 'react';
import Characters from './components/Characters'
import './App.css';
import Houses from "./components/Houses"
import Books from './components/Books'


function App() {
  return (
    <div className="App">
      <Houses />
      <Characters/>
      <Books />
    </div>
  );
}

export default App;
