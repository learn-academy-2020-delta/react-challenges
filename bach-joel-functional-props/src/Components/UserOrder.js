import React, { Component } from 'react'

export default class UserOrder extends Component {
    render(){
        return(
            <>
            <h1>Your Order</h1>
                <ul>
                    { this.props.cart.map((item, index) => {
                        return (
                            <li key={ index }>{ item }</li>
                        )
                    })
                }
                </ul>
            </>
        )
    }
}