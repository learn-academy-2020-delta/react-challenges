import React, { Component } from 'react';
// import nasaData from './nasaData.'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        ip: "",
        currentLocation: "",
        nasaData: null,
        currentPic: null
      }
  }

  componentDidMount(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response => {
      if(response.status === 200){
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ nasaData: payload.photos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random()* this.state.nasaData.length)
    this.setState({currentPic: this.state.nasaData[randomNum].img_src})
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ ip: payload })
    })
    .catch(error => {
      console.log(error)
    })
  }

  getLocation = () => {
    fetch("https://ipapi.co/json/")
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ currentLocation: payload })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    return (
      <>
        <h1>IP Info</h1>
        <p>Your IP: { this.state.ip.ip }</p>
        <button onClick = { this.getIP }>Get your IP Address</button>
        <h1>Current Location</h1>
        <p>Your Location: { this.state.currentLocation.city }</p>
        <button onClick = { this.getLocation }>Get your current location</button>
        <h1>Mars Picture</h1>
        <button onClick = { this.getPic }>See a picture of Mars</button>
        { this.state.currentPic && <img src={this.state.currentPic} alt="pics of Mars" style ={{ height: "200px", width: "200px"}}/> }
      </>
    );
  }
}

export default App;
