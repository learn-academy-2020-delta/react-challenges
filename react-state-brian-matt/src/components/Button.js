import React, { Component } from 'react';
import ColorBox from './ColorBox';

export default class Button  extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            inputList: [],
        }
    }
    handleChange = () => {
        let { inputList } = this.state
        this.setState({
            inputList: inputList.concat(<ColorBox />)
        })
    }

    render() {
        return(
            <div>
                <button onClick= { this.handleChange }>
                    Add Color Box
                </button>

                {this.state.inputList.map(function(input, index) {
                    return { input }
                })}
            </div>
        )
    }
}