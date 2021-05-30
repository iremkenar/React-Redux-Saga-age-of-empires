import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import UnitsPage from './components/UnitsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/unitsList" component={UnitsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
