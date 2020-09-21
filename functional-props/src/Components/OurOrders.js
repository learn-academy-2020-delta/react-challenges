import React, { Component } from 'react'

class OurOrders extends Component {
    render() {
        return (
            <>
                <h4>Our Orders</h4>

                {this.props.orders.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}

            </>
        )
    }
}
export default OurOrders