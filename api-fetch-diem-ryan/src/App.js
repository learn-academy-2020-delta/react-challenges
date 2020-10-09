import React, { Component } from 'react';
import nasa from './nasaData.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip:"",
      nasaData: null,
      picOfDay: null,
    }
  }

  componentDidMount(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response =>{
      if(response.status === 200){
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ nasaData: payload.url})
    })
    .catch(error => {
      console.log(error);
    })
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => {
      if(response.status === 200){
        return response.json()
      }
    })
    .then(payload =>{
      this.setState({ ip:payload })
    })
    .catch(error =>{
      console.log(error);
    })
  }


  getPic = () => {
    this.setState({ picOfDay: this.state.nasaData.url})
  }

  render(){
    return (
      <>
        <h1>Where are you located?</h1>
        <button onClick = { this.getIP }> Get your location! </button>
        <p>You are from: { this.state.ip.city}, { this.state.ip.region }</p>

        <h1>This is NASA's pic of the day:</h1>
        <button onClick = { this.getPic }> See Pic of Day</button>
        {
          this.state.picOfDay &&
          <img 
            src = {this.state.picOfDay}
            alt = "NASA's pic of day"
            style= {{ height: "200px" }}
          />
        }
      </>
    );
  }
}

export default App;
