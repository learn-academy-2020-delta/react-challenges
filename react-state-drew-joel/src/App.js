import React, { Component } from 'react';
import './App.css';
import Colorbox from './Colorbox'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      renderQuestion: null 
    }
  }

  addBox = () => {
    let {renderQuestion} = this.state
    this.setState({renderQuestion: true})
  }

  removeBox = () => {
    let {renderQuestion} = this.state
    this.setState({renderQuestion: false})
  }


  render(){
    let {renderQuestion} = this.state
    return (
      <div className="App">
        <Colorbox />
        {renderQuestion === true ? <Colorbox /> : null}
        {renderQuestion === true ? <Colorbox /> : null}
        {renderQuestion === true ? <Colorbox /> : null}
        {renderQuestion === true ? <Colorbox /> : null}
        <button onClick = {this.addBox}>Add</button>
        <button onClick = {this.removeBox}>Remove</button>
      </div>
    );
  }
}
