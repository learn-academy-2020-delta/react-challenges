import React, { Component } from 'react'

export default class FoodMenu extends Component {
    render(){
        return(
            <>
            <h1>MENU</h1>
        <ul>
            { this.props.menuItems.map((item, index) => {
            return (
                <div key={ index }>
                    <li>{ item.item } ${ item.price}</li>
                    <button onClick={ () => this.props.addItem(item)}>Add to Order!</button>
                </div>
                )
            })}
        </ul>
            </>
        )
    }
}