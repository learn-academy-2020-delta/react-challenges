import React, { Component } from 'react';
import Dice from './Components/Dice'
import Rolls from './Components/Rolls'
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)
//this.state has numbers of dice
        this.state = {
          numbers: [],
          currentNumber: ""

    }
}
    handleChange = () => {
        // create variable called randomColor that holds the random number associated with that color in array
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        let newNumbers = this.state.numbers.concat(randomNumber)
          this.setState({currentNumber: randomNumber},{numbers: newNumbers})
          console.log(randomNumber);
        // want to make sure that random square color === nameOfColor
        // this.setState({nameOfColor: randomColor})
        // randomColor has to equal the string name of the color
    }

  render (){
    return (
    <div>
        <Dice die={this.state.currentNumber}/>
        <button onClick = {this.handleChange}> Click to roll! </button>
        <Rolls history={this.state.numbers}/>
    </div>
  );
}
}
export default App;
