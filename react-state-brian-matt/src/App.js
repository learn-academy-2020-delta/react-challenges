import React, { Component } from 'react';
import ColorBox from './components/ColorBox';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </>
    )
  }
}

