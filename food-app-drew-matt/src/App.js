import React, {Component} from 'react';
import './App.css';
import Fooditems from './Components/Fooditems';
import Cart from './Components/Cart'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      menu1: {
        fooditem: "cheeseburger",
        price: 5.00
      },
      menu2: {
        fooditem: "Pizza",
        price: 6.00
      },
      menu3: {
        fooditem: "Pizza",
        price: 6.00
      },
      menu4: {
        fooditem: "Ribs",
        price: 9.00
      },
      menu5: {
        fooditem: "Salad",
        price: 6.00
      },
      menuList: ["menu1", "menu2", "menu3", "menu4", "menu5"],
      cart: []
    }
  }

  render(){  
    return (
      <div className="App">
        <Fooditems 
          menuList={this.state.menuList}
          menu1={this.state.menu1}
        />
      </div>
    );
  }
}

export default App;
