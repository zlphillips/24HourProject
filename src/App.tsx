import React from 'react';
import Characters from './components/Characters'
import Houses from "./components/Houses"
import Books from './components/Books'
import './App.css';


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
