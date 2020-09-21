import React, { Component } from 'react'

class FoodItems extends Component {
    render() {
        return (
            <>
                <h4>Menu</h4>
                <ul>
                    {this.props.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>{item}</li>
                                <button onClick={() => {
                                    this.props.addItem(item)
                                }
                                }> Add to order</button>
                            </div>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default FoodItems