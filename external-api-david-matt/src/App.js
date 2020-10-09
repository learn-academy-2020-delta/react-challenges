import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: "",
      city: "",
      postal: ""
    }
  }

  getCity = () => {
    fetch("https://ipapi.co/json/")
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then(payload => {
        this.setState({ ip: payload })
        this.setState({ city: payload })
        this.setState({ postal: payload })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <>
        <h1>IP City</h1>
        <button onClick={this.getCity}>Get Info </button>
        <p>Your city: {this.state.city.city}</p>
        <p>Your postal: {this.state.postal.postal}</p>
        <p>Your IP: {this.state.ip.ip}</p>

      </>
    )
  }
}

export default App;
