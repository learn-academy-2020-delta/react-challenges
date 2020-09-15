import React, {Component} from 'react'

class Dice extends Component{
    // Dice component should dynamically display the random number when clicked

    render() {
        return (
        <>
            { this.props.currentNumber }
        </>
        )
    }
}

export default Dice
