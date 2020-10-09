import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip: null
    }
  }

  getInfo = () => {
    fetch("https://ipapi.co/json/")
    .then(response => {
      if(response.status === 200){
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ ip: payload})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { ip } = this.state
    return (
      <div className="box">
        <h1>Your Computer Info</h1>
        <button onClick={ this.getInfo }>Get info</button>
        {
          ip && <p>Your IP: {ip.ip}</p>
        }
        {
          ip && <p>Your country: {ip.country}</p>
        }
        {
          ip && <p>Your state: {ip.region}</p>
        } 
        {
          ip && <p>Your city: {ip.city}</p>
        }
        {
          ip && <p>Your timezone: {ip.timezone}</p>
        }
      </div>
    );
  }
}


