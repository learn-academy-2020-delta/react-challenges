import React, { Component } from 'react';
import ColorBox from './components/ColorBox';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
        colorBoxList: [<ColorBox />],
    }
  }
  handleChange = () => {
    let { colorBoxList } = this.state
    colorBoxList.push(<ColorBox />)
    this.setState({
      colorBoxList: colorBoxList
    })
    console.log(this.state.colorBoxList);
  }

  handleChange2 = () => {
    let { colorBoxList } = this.state
    colorBoxList.pop(<ColorBox />)
    this.setState({
      colorBoxList: colorBoxList
    })
    console.log(this.state.colorBoxList);
  }


  render() {
    return (
      <>
        <button onClick={ this.handleChange }>
          Add Color Box
        </button>
        <button onClick={ this.handleChange2 }>
          Remove Color Box
        </button>
        <div>
        { this.state.colorBoxList }
        </div>
      </>
    )
  }
}

