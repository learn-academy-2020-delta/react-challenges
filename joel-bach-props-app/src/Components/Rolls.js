import React, {Component} from 'react'

class Rolls extends Component{
    render() {
        // want to list the random number rolled in a list format
        let eachRoll = this.props.historyOfNumRolled.map(number => {
            return (
                <li> { number } </li>
            )}
        )
        return (
        <>
            <h1> Rolls </h1>
            <ul> { eachRoll } </ul>
        </>
        )
    }
}

export default Rolls