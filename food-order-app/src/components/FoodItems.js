import React, { Component } from 'react'

class FoodItems extends Component {
  render() {
    return(
      <>
        <h3>Food Items</h3>
        <ul>
          { this.props.items.map((item, index) => {
            return (

              <div key={ index }>
                <li>{ item }</li>

                <button onClick={ () => { this.props.addItem(item, index) } }>Add Item</button>
              </div>
            )
          })}
        </ul>
      </>
    )
  }
}
export default FoodItems
