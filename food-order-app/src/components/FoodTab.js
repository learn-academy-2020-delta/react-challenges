import React, { Component } from 'react'

class FoodTab extends Component {
  render() {
    return(
      <>
        <h3>Food Tab</h3>
        <ul>
          { this.props.tab.map((item, index) => {
            return(
              <li key={ index }>{ item }</li>
            )
          })}
        </ul>

        <h3>Subtotal = {`$${this.props.totalBill}`}</h3>
        <h4>Sales Tax = ${(this.props.totalBill * 0.08).toFixed(2)}</h4>
        <h3>Total Bill = ${(this.props.totalBill * 1.08).toFixed(2)}</h3>
      </>
    )
  }
}
export default FoodTab
