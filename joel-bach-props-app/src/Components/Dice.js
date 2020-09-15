import React, {Component} from 'react'


class Dice extends Component{
    // Dice component should dynamically display the random number when clicked

    render() {
        return (
        <>
        <div className ="cube">
            { this.props.currentNumber }
        </div>
        </>
        )
    }
}

export default Dice
