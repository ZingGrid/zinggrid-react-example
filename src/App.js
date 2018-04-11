import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadOnly from './components/ReadOnly';
import DataChange from './components/DataChange';
import Methods from './components/Methods';
import Events from './components/Events';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    // TODO: create Methods and Ajax components
    // TODO: fix style of components + nav (show active-tab)
    return (
      <div className="App">
        <nav>
            <Link to="/readonly">Read-Only</Link>
            <Link to="/datachange">Two-Way Binding</Link>
            <Link to="/methods">Methods</Link>
            <Link to="/events">Events</Link>
        </nav>
        
        <Route path='/' component={ReadOnly}/>
        <Route path='/readonly' component={ReadOnly}/>
        <Route path='/datachange' component={DataChange}/>
        <Route path='/methods' component={Methods}/>
        <Route path='/events' component={Events}/>
  
      </div>
    );
  }
}

export default App;
