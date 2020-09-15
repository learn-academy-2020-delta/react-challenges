import React, { Component } from 'react'

class Rolls extends Component {
    render(){
        let eachRoll = this.props.listOfRolls.map( roll => {
            return (
            <li> { roll } </li>
            )
        })
        return(
            <>
                <h3>These were your previous rolls = </h3>
                <ul>
                    { eachRoll }
                </ul>
            </>
        );
    }
}

export default Rolls;