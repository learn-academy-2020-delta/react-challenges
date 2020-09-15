import React, { Component } from 'react';

export default class RollDice extends Component {
     constructor(props) {
         super(props)

     }

 

    render() {
        return(
            <div>
                <div id= "square">
                    { this.props.currentRoll }
                </div>
                <div>
                    <button onClick= { this.props.handleChange }>  Click Me! </button>
                </div>
            </div>
        )
    }
}