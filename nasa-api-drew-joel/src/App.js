import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marsWeather: ""
    }
  }

  Weather = () => {
    fetch("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
      .then(response => {
        if (response.status === 200)
          return response.json()
      })
      .then(payload => {
        this.setState({ marsWeather: payload })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { marsWeather } = this.state
    return (
      <div>
        <h1>Mars Weather</h1>
        <button onClick={marsWeather.weather}>Rain or Shine?</button>
        {
          marsWeather &&
          <p>Season: {marsWeather.Season}</p>
        }
        {
          marsWeather &&
          <p>AV: {marsWeather.av}</p>
        }
        {
          marsWeather &&
          <p>CT: {marsWeather.ct}</p>
        }
        {
          marsWeather &&
          <p>MN: {marsWeather.mn}</p>
        }
        {
          marsWeather &&
          <p>MX: {marsWeather.mx}</p>
        }
      </div>
    );
  }
}
export default App;
