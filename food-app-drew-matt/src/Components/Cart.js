import React, {Component} from 'react';

class Cart extends Component{
  render(){ 
    return (
      <div className="FoodList">
        <h3>Cart:</h3>
        <ul>
            {this.props.cart.map((item, index) => {
                return(
                    <li key={index}>
                        {item.fooditem} ${item.price}
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}

export default Cart;
