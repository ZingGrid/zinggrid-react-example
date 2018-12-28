import React, { Component } from 'react';
import './App.css';
import ReadOnly from './components/ReadOnly';
import OneWayBinding from './components/OneWayBinding';
import TwoWayBinding from './components/TwoWayBinding';
import Ajax from './components/Ajax';
import Methods from './components/Methods';
import Events from './components/Events';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
            <Link to="/readonly">Read-Only</Link>
            <Link to="/one-way-binding">One-Way Binding</Link>
            <Link to="/two-way-binding">Two-Way Binding</Link>
            <Link to="/ajax">Ajax</Link>
            <Link to="/methods">Methods</Link>
            <Link to="/events">Events</Link>
        </nav>
        
        <Route exact path='/' component={ReadOnly}/>
        <Route path='/readonly' component={ReadOnly}/>
        <Route path='/one-way-binding' component={OneWayBinding}/>
        <Route path='/two-way-binding' component={TwoWayBinding}/>
        <Route path='/ajax' component={Ajax}/>
        <Route path='/methods' component={Methods}/>
        <Route path='/events' component={Events}/>
  
      </div>
    );
  }
}

export default App;
