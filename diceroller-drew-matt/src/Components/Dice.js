import React, {Component} from 'react';

class Dice extends Component {

  render() {
    return (
      <div>
          <div className="numberBox" onClick={this.props.roller}>
              <p>{this.props.number}</p>
          </div>
          <h1>Click Box to Roll</h1>
      </div>
    )
  }
}

export default Dice;
