import React, {Component} from 'react';

class Fooditems extends Component{
  render(){ 
    console.log(this.props.menuList); 
    return (
      <div className="FoodList">
        <ul>
            {this.props.menuList.map((item, index) => {
                return(
                    <li key={index}>
                        {item.fooditem}...${item.price}
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}

export default Fooditems;
