import React from 'react';
import './App.css';
import Books from './components/Books'
import Houses from './components/Houses'
import Characters from './components/Characters'

function App() {
  return (
    <div>
      <Houses />
      <Characters />
      <Books />
    </div>
  );
}

export default App;
