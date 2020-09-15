import React, { Component } from 'react'
import FoodTab from './components/FoodTab'
import FoodItems from './components/FoodItems'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ["Hamburger $3", "Fries $2", "Soda $1"],
      price: [3, 2, 1],
      tab: [],
      totalBill: 0
    }
  }

  addItem = (currentItem, curIndex) => {

    const { tab, totalBill } = this.state
    this.setState({ tab: [...tab, currentItem] })
    this.setState({ totalBill: totalBill + this.state.price[curIndex]})
  }

  render(){
    return(
      <>
        <h1>Food Order App</h1>

        <FoodItems
          items={ this.state.items }
          addItem={ this.addItem }
        />
        <FoodTab
          tab = { this.state.tab }
          totalBill = { this.state.totalBill }
          price = { this.state.price }
        />
      </>
    )
  }
}

export default App
