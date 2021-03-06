import React, { Component } from 'react';

class Boxes extends Component {
    constructor(props) {
        super(props)
            this.state = {
                //   index:      0       1        2         3       4       5         6
                squareColor: ["white", "green", "blue", "yellow", "red", "purple", "orange"],
                // nameOfColor is associated with the button name
                nameOfColor: "white"
        }
    }
    //handle change method that will change the name of button and its corresponding color*/}
    handleChange = () => {
        // destructor our squareColor and the nameOfColor
        let { squareColor, nameOfColor } = this.state
        // create variable called randomColor that holds the random number associated with that color in array
        let randomColor = squareColor[Math.floor(Math.random() * 6)]
        // want to make sure that random square color === nameOfColor
        this.setState({nameOfColor: randomColor})
        // randomColor has to equal the string name of the color
    }

    render() {
      const buttonStyle = {
        color: "black",
        backgroundColor: this.state.nameOfColor,
        fontFamily: "Arial",
        border: "none",
        borderColor: "gray",
        padding: "50px 50px",
      }
        return(
            <>
                <h1>COLOR SQUARE</h1>
                {/* use template literals to change button name to nameOfColor */}
                <button style={buttonStyle} onClick = {this.handleChange}>
                    { this.state.nameOfColor }
                </button>
            </>
        )
    }
}

export default Boxes;
