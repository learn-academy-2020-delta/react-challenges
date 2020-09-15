import React, { Component } from 'react';

class Rolls extends Component {

  render() {
    return (
        <>
          <h3>Previous Rolls</h3>
          <p>{this.props.history}</p>
        </>
  );
}

}
export default Rolls;
