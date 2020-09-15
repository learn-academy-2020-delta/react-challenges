import React, { Component } from 'react';

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorOptions: ["green", "blue", "yellow", "red", "purple", "orange"],
            colorText: "",
            backgroundColor: "white"
        }
    }
    handleChange = () => {
        let {colorOptions} = this.state
        let chosenColor = colorOptions[Math.floor(Math.random()* 6)]
        this.setState({colorText: chosenColor, backgroundColor: chosenColor})

    }
    render() {
        return(
            <div className="square" onClick={this.handleChange} style={{backgroundColor: this.state.backgroundColor}}>
                {this.state.colorText}
            </div>
        )
    }
}
