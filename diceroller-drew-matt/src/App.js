import React, {Component} from 'react';
import './App.css';
import Dice from './Components/Dice';
import Rolls from './Components/Rolls';


class App extends Component {
constructor(props){
    super(props)
    this.state= {
      diceRolls: [1, 2, 3, 4, 5, 6],
      rolledNumber: [],
      rollHistory: []
    }
  }

randomNumber = () => {
  let { rollHistory, rolledNumber, diceRolls} = this.state
  let number = Math.floor(Math.random()* this.state.diceRolls.length)
  this.setState({rolledNumber: diceRolls[number]})
  rollHistory.push(diceRolls[number])
  console.log(this.state.rollHistory)
}

  render() {
    return (
      <div>
        <div>
          <Dice 
            roller={this.randomNumber}
            number={this.state.rolledNumber}
          />
        </div>
        <div>
          <Rolls 
            rolls={this.state.rollHistory}
          />
        </div>
      </div>
    )
  }
}

export default App;
