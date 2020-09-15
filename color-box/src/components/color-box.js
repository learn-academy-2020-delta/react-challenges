import React, { Component } from 'react'

class ColorBox extends Component {
  constructor(props){
    super(props)
      this.state = {
        colorOption : ["green", "blue", "yellow", "red", "purple", "orange"],
        // bkGroundColor : ["green", "blue", "yellow", "red", "purple", "orange"],
        currentColor: "green"
    }
  }

  handleChange = () => {
    let { colorOption, bkGroundColor, currentColor } = this.state
    let colorIndex = Math.floor(Math.random() * 6)
    let colorValue = colorOption[colorIndex]
    // console.log(colorIndex)
    // let bkGroundColorValue = bkGroundColor[colorIndex]
    this.setState({currentColor: colorValue})
  }

  render() {
    const headerStyle = {
      color: "black",
      fontFamily: "Arial"
    }
    return (
      <div>
        <h2 style={{ headerStyle }}>Ryan & Chuck's Color Box</h2>
        <div id="whiteSquare" style={{background: this.state.currentColor}}>
        {this.state.currentColor}
          </div>
          <button onClick = {this.handleChange}> Click Me
        </button>
      </div>
    )
  }
}

export default ColorBox
