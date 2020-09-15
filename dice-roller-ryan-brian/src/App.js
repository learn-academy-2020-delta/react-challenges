import React, { Component } from 'react';
import RollDice from './Components/RollDice';
import './App.css';
import RollCounter from './Components/RollCounter';

export default class DiceRoller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: ["1", "2", "3", "4", "5", "6"],
      currentRoll: "",
      logArray: [],
    }
  }

  handleChange = () => {
    let { dice } = this.state
    let randomMath = Math.floor(Math.random() * 6)
    let display = dice[randomMath]
    return this.setState({ currentRoll: display })
  }

  numberList = () => {
    let { logArray, currentRoll } = this.state
    let newVar = logArray.push(currentRoll)
    let display2 = `${newVar}`
    return this.setState({ logArray: display2 })  
  }

  render() {
    return (
        <>
          <RollDice currentRoll={this.state.currentRoll} handleChange={this.handleChange}/>
          <RollCounter numberList={this.numberList} logArray={this.state.logArray} />
        </>
    )
  }
}