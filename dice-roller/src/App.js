import React, { Component } from 'react';
import './App.css'
import Dice from './Components/Dice.js'
import Rolls from './Components/Rolls.js'
import dice1 from './Assets/dice1.png'
import dice2 from './Assets/dice2.png'
import dice3 from './Assets/dice3.png'
import dice4 from './Assets/dice4.png'
import dice5 from './Assets/dice5.png'
import dice6 from './Assets/dice6.png'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentRoll: 0,
      previousRolls: [],
      diceImages: [null, dice1, dice2, dice3, dice4, dice5, dice6]
    }
  }
  handleChange = () => {
    let { currentRoll, previousRolls } = this.state
    let diceRoll = Math.ceil(Math.random() * 6)
    this.setState({ currentRoll : diceRoll})
    previousRolls.push(diceRoll)
    console.log(diceRoll);
    console.log(previousRolls);
  }

  clearRollLog = () => {
    let { currentRoll, previousRolls } = this.state
    this.setState({ previousRolls : [] })
    this.setState({ currentRoll : null })
  }

  render() {
    return (
      <>
      <button onClick = { this.handleChange }> Click Box to Roll</button>
      <Dice roll = { this.state.currentRoll }/>
      <img id="dice" src = {this.state.diceImages[1]} ></img>
      <br></br>
      <Rolls listOfRolls = { this.state.previousRolls } />
      <button onClick = { this.clearRollLog }> Click Me to Reset Game </button>
      </>
    );
  }
}

export default App;
