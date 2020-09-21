import React, { Component } from 'react';

class Bulb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "",
            light: "off"

        }
    }



    handleChange = () => {
        //destructure
        let { light } = this.state
        //ternary to switch between on and off.
        return light === "off" ? this.setState({
            color: "yellow",
            light: "on",
        }) : this.setState({
            color: "white",
            light: "off",
        })
    }


    render() {
        const divStyle = {
            margin: "auto",
            width: "20%"
        }

        const buttonStyle = {
            backgroundColor: this.state.color,
            border: "1px, solid, #000",
            fontSize: "50px",
            height: "400px",
            width: "400px",
            padding: "30px 30px",

        }
        return (
            <div style={divStyle}>
                <button style={buttonStyle} onClick={this.handleChange} > {this.state.light} </button>
            </div >
        )
    }
}

export default Bulb