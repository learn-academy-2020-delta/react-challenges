import React, {Component} from 'react';

class Fooditems extends Component{
  render(){  
    return (
      <div className="FoodList">
        <h3>Menu:</h3>
        <ul>
            {this.props.menuList.map((item, index) => {
                return(
                    <li key={index}>
                        {item.fooditem} ${item.price}<br/>
                        <button onClick={ () => this.props.addItem(item)}>Add Item</button>
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}

export default Fooditems;
