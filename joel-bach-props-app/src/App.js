import React, {Component} from 'react';
import Dice from './Components/Dice'
import Rolls from './Components/Rolls'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      logOfRollsThrown: [],
      currentRandomizedNumber: ""
    }
  }

  diceRoll = () => {
    // want to the roll to be a number between 1 and 6
    let randomRoll = Math.floor(Math.random() * 6 + 1)
    console.log(randomRoll)
    // change the state object of rollNumber to equal the value of randomRoll
    let joined = this.state.logOfRollsThrown.concat(randomRoll) 
    console.log(joined)
    this.setState({ currentRandomizedNumber: randomRoll })
    this.setState({ logOfRollsThrown: joined })
  }

  render() {

    return (
      <>
      <div className = "content">
      <Dice currentNumber = { this.state.currentRandomizedNumber }/>
      <Rolls historyOfNumRolled = { this.state.logOfRollsThrown } />
      {/* want to change text of button displayed to equal the random number*/}
      <button className = "dice-cube" onClick = { this.diceRoll }> ? </button>
      </div>
      </>
    )
  }
}

export default App;
