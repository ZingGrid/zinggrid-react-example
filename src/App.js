import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadOnly from './components/ReadOnly';
import DataChange from './components/DataChange';
import Events from './components/Events';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/readonly">Read-Only</Link>
            <Link to="/datachange">Two-Way Binding</Link>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      <Route path='/readonly' component={ReadOnly}/>
      <Route path='/datachange' component={DataChange}/>
      <Route path='/events' component={Events}/>
  
      </div>
    );
  }
}

export default App;
