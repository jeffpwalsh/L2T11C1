import React from 'react';
//PAGE REDIRECT
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//BOOTSTRAP IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//COMPONENT IMPORTS
import Menu from './components/Menu'
import Home from './components/Home'
import Converter from './components/Converter'
import CardsDisplay from './components/CardsDisplay.js'

function App() {
  return (
      <div>
      <div className="header">
      <Menu />
      </div>
      <div className="body">
        {/* REDIRECTS */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cards" component={CardsDisplay} />
          <Route path="/converter" component={Converter} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
