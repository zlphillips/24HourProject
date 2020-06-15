import React from 'react';
import Characters from './components/Characters';
import Houses from "./components/Houses";
import Books from './components/Books';
import SimpleMenu from './home/Navbar';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Books from './components/Books'
import Houses from './components/Houses'
import Characters from './components/Characters'

function App() {
  return (
    <div className="App">
      <Router>
        <SimpleMenu/>
        <Switch>
          <Route path = '/Houses'>
            <Houses />
          </Route>
          <Route path = '/Characters'>
            <Characters/>
          </Route>
          <Route path = '/Books'>
           <Books/>
          </Route>
          <Route path = '/'>
            <Home/>
          </Route>
          </Switch>
      </Router>
    
    </div>
  );
}

export default App;
