import React, { Component } from 'react';

class Dice extends Component {

  render() {
    return (
        <>
          <h3>current roll</h3>
          <p>{this.props.die}</p>
        </>
  );
}

}
export default Dice;
