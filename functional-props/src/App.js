import React, { Component } from 'react'
import FoodItems from './Components/FoodItems'
import OurOrders from './Components/OurOrders'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: ["Burgers", "Hotdogs", "Pizza", "Fries"],
      price: ["$8", "$5", "$15", "$3"],
      orders: []
    }
  }

  addItem = (currentItem) => {
    const { orders } = this.state
    this.setState({ orders: [...orders, currentItem] })
  }




  render() {
    return (
      <>
        <h1>Food Orders</h1>
        <FoodItems items={this.state.menu} addItem={this.addItem} />
        <OurOrders orders={this.state.orders} />
      </>
    )
  }
}
export default App;
