import React, { Component } from 'react';
import './App.css';
import Colorbox from './Colorbox'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      colorBoxes: []
    }
  }

  addBox = () => {
    let { colorBoxes } = this.state
    colorBoxes.push(<Colorbox />)
    this.setState({colorBoxes: colorBoxes})
  }

  removeBox = () => {
    let { colorBoxes } = this.state
    colorBoxes.pop(<Colorbox />)
    this.setState({colorBoxes: colorBoxes})
  }


  render(){
    let {colorBoxes} = this.state
    console.log(colorBoxes)
    return (
      <div className="App">
        <div>
          { colorBoxes }
        </div>
        <button onClick = {this.addBox}>Add</button>
        <button onClick = {this.removeBox}>Remove</button>
      </div>
    );
  }
}
