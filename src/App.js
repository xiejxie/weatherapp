import React, { Component } from 'react';
import MainForm from './MainForm';
import { getWeatherData } from './WeatherActions.js';
/*
  Master App
*/

class App extends Component {

  render() {
    return (
      <div className='App'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <MainForm city="Toronto"/>
      </div>
    );
  }
}

export default App;
