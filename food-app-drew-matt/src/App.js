import React, {Component} from 'react';
import './App.css';
import Fooditems from './Components/Fooditems';
import Cart from './Components/Cart'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      menuList: [
        {fooditem: "Cheeseburger", price: 5.00},
        {fooditem: "Pizza", price: 6.00},
        {fooditem: "Chicken Sandwich", price: 6.00},
        {fooditem: "Ribs", price: 9.00},
        {fooditem: "Salad", price: 6.00},
      ],
      cart: []
    }
  }

  addItem = (currentItem) => {
    const { cart } = this.state
    this.setState({ cart: [...cart, currentItem]})
  }

  render(){  
    console.log(this.state.cart)
    return (
      <div className="App">
        <Fooditems 
          menuList={this.state.menuList}
          addItem={this.addItem}
        />
        <Cart 
          cart={this.state.cart}
        />
      </div>
    );
  }
}

export default App;
