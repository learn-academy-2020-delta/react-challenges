import React, {Component} from 'react';
import './App.css';
import Dice from './Components/Dice';
import Rolls from './Components/Rolls';
import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';


class App extends Component {
constructor(props){
    super(props)
    this.state= {
      diceRolls: [1, 2, 3, 4, 5, 6],
      rolledNumber: [],
      rollHistory: [],
      currentDice: ""
      diceImages: [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
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
      <div className="app">
        <div className="dice">
          <Dice 
            img={this.state.diceImages}
            roller={this.randomNumber}
            number={this.state.rolledNumber}
          />
        </div>
        <div className="rolls">
          <Rolls 
            rolls={this.state.rollHistory}
          />
          <img src={Dice1}/>
        </div>
      </div>
    )
  }
}

export default App;
