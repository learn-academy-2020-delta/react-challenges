import React, {Component} from 'react';
import Dice from './Components/Dice'
import Rolls from './Components/Rolls'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      diceNumber: [],
      rollNumber: ""
    }
  }

  diceRoll = () => {
    // want to the roll to be a number between 1 and 6
    let randomRoll = Math.floor(Math.random() * 6 + 1)
    console.log(randomRoll)
    // change the state object of rollNumber to equal the value of randomRoll
    let joined = this.state.diceNumber.concat(randomRoll) 
    console.log(joined)
    this.setState({ rollNumber: randomRoll })
    this.setState({ diceNumber: joined })
  }

  render() {

    return (
      <>
      <Dice currentNumber = { this.state.rollNumber }/>
      <Rolls historyOfNumRolled = { this.state.diceNumber } />
      {/* want to change text of button displayed to equal the random number*/}
      <button className = "dice-cube" onClick = { this.diceRoll }> ? </button>
      </>
    )
  }
}

export default App;
