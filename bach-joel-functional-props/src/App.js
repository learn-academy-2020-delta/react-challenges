import React, { Component } from 'react';
import FoodMenu from './Components/FoodMenu'
import UserOrder from './Components/UserOrder'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [{item:"Burgers:", price: 7.75}, {item:"Milkshake:", price: 4.25}, {item: "Fries:", price: 2.00}, {item: "Egg Breakfast:", price: 9.45}, {item: "Coffee:", price: 1.40}, {item: "Tea:", price: 1.50}, {item: "Side Salad:", price: 6.25}],
      cart: [],
      finalPrice: []
    }
  } 

  
addItem = (currentItem) => {
  // addPrice()
  this.setState({ cart: [...this.state.cart, currentItem] })
}

render() {
  return (
    <React.Fragment>
    <h1>React Diner</h1>
    <FoodMenu 
      menuItems={this.state.menuItems} 
      addItem={this.addItem}
    />
    <UserOrder
      cart={ this.state.cart }
      finalPrice={ this.state.finalPrice }
      />
    </React.Fragment>
  )
}
}
