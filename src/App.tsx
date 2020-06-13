import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Books from './components/Books'
const testProp = 4;

function App() {
  return (
    <div>
      <Books testProp = {testProp}/>
    </div>
  );
}

export default App;
