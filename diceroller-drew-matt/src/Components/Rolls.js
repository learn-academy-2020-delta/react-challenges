import React, {Component} from 'react';

class Rolls extends Component {

  render() {
    let eachRoll = this.props.rolls.map(roll => {
        return(
          <li>{roll}</li>
        )
    })
    return (
      <div>
        <h3>Rolls:</h3>
        <ul>
          {eachRoll}
        </ul>
      </div>
    )
  }
}

export default Rolls;
