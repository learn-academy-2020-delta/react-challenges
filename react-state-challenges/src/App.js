import React, { Component } from 'react';
import Boxes from './components/Boxes.js'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
    );
  }
}

export default App;
