import React, { Component } from 'react';
import './App.css';

export default class Colorbox extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: ["green", "blue", "yellow", "red", "purple", "orange"],
            currentColor: "white",
            bgroundColor: "white",
        }
    }

    handleChange = () => {
        let { color, currentColor } = this.state
        let newColor = color[Math.floor(Math.random() * 6)]
        this.setState({currentColor: newColor})
        this.setState({bgroundColor: newColor})
    }

  render(){
      let { currentColor, bgroundColor } = this.state
      let bckColor = {backgroundColor: bgroundColor}
    return (
      <div className="App">
        <div className="colorBox" style={bckColor}>
            <p onClick = {this.handleChange}>Choose a color: {currentColor}</p>
        </div>
      </div>
    );
  }
}
