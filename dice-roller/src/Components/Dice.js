import React, { Component } from 'react'

class Dice extends Component {
    render(){
        return(
            <>
            <p>Dice roll = { this.props.roll }</p>
            </>
        );
    }
}

export default Dice;