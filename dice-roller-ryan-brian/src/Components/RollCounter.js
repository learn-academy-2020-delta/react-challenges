import React, { Component } from 'react';

export default class RollCounter extends Component {
    constructor(props) {
        super(props)

    }



   render() {
       return(
           <div>
               <h1>{ this.props.logArray} </h1>
           </div>
       )
   }
}