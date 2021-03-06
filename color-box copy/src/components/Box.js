import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorOptions: ["red", "blue", "green", "orange", "yellow", "purple"],
            currentColor: "Click Me to Begin"
        }
    }

    handleChange = () => {
        //destructure
        let { colorOptions } = this.state
        //create a var to hold the random color
        let newColor = colorOptions[Math.floor(Math.random() * 6)]
        // this.setState({ currentColor : newColor})
        this.setState({ currentColor: newColor })
    }

    render() {
        const buttonStyle = {
            backgroundColor: this.state.currentColor,
            border: "1px, solid, #000",
            fontFamily: "papyrus",
            fontSize: "50px",
            height: "400px",
            width: "400px",
            padding: "30px 30px",
            margin: "50px 200px"
        }

        return (
            <div>
                <button style={buttonStyle} onClick={this.handleChange} > {this.state.currentColor}  </button>
            </div>
        )
    }
}

export default Box