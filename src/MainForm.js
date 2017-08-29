import React, { Component } from 'react';
import './App.css';
import { addCitySuggestion } from './SuggestionForm';
import { getWeatherData } from './WeatherActions.js';
import SubPanel from './SubPanel';
import InfoPanel from './InfoPanel';
import Warning from './Warning';
import Suggestions from './SuggestionForm';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Collapse from 'react-bootstrap/lib/Collapse';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class MainForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      animation: false,
      open: true,
      alldata:[
        {wind_speed: '', wind_direction: '', min_temp: '', max_temp: '', humidity: '', visibility: ''},
        {the_temp:"", weatherstate:"", abbr:""},
        {the_temp:"", weatherstate:"", abbr:""},
        {the_temp:"", weatherstate:"", abbr:""},
        {the_temp:"", weatherstate:"", abbr:""}
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doWeatherOp(this.props.city)
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var city = this.state.text;
    this.doWeatherOp(city);
    addCitySuggestion(city);
    document.getElementById('cityinput').reset();
  }

  doWeatherOp(city) {
    getWeatherData(city)
      .then(weatherData => {
        var basedata = weatherData.consolidated_weather;
        var data = basedata["0"];
        this.setState({
          alert: false,
          animation: this.state.animation,
          temp: Number(data.the_temp).toFixed(0)+" °C",
          weatherstate: data.weather_state_name,
          abbr: data.weather_state_abbr,
          citytitle: weatherData.title,
          alldata: basedata
        });
      }).catch(e => this.setState({
        ...this.state,
        alert: true,
        animation: !this.state.animation
      }));
  }

  render() {
    return (
      <div className="MainForm">
        <Panel className="Header">
        <div className="menubutdiv">
        <button className="menubut hvr-forward" onClick={ ()=> this.setState({ open: !this.state.open })}>
          <Glyphicon glyph="align-justify" />
        </button>
        </div>
        <Collapse in={this.state.open}>
          <div className="formgroup">
            <form onSubmit={this.handleSubmit} className="Cityform" id="cityinput">
              <input className="inputform hvr-fade" type="text" name="city"
              onChange={this.handleChange} placeholder="Search city" list="suggestions" autoComplete="off"/>
              <Button className="submitbut hvr-fade" type="submit">
                <Glyphicon glyph="search" />
              </Button>
              <Suggestions />
            </form>
            <Warning text= {this.state.text} animation={this.state.animation} open={this.state.alert}/>
          </div>
        </Collapse>
        </Panel>
        <Panel className="CityPanel">
        <div className="citypaneldiv">SUMMARY</div>
        <CSSTransitionGroup transitionName="fadein" transitionEnterTimeout={1000} transitionLeave={false}>
          <div key={this.state.citytitle}>
          <Col md={3} mdOffset={1}>
            <img width="240" height="240" className="pull-right" id="weather image" alt=""
            src={'https://www.metaweather.com/static/img/weather/'+this.state.abbr+'.svg'}></img>
          </Col>
          <Col md={4}>
            <div className="text-left header1">{this.state.citytitle}</div>
            <div className="text-left WeatherInfo" id="temperature"><p>{this.state.temp}</p></div>
            <div className="text-left WeatherInfo" id="weather state">{this.state.weatherstate}</div>
          </Col>
          <InfoPanel data={this.state.alldata['0']} city={this.state.citytitle}/>
          </div>
          </CSSTransitionGroup>
        </Panel>

        <div className="forecastdiv">
        <div className="forecast">
        <div className="forecastpanel">
        FOUR DAY FORECAST
        </div>
        </div>

        <SubPanel data={this.state.alldata['1']} city={this.state.citytitle} />
        <SubPanel data={this.state.alldata['2']} city={this.state.citytitle} />
        <SubPanel data={this.state.alldata['3']} city={this.state.citytitle} />
        <SubPanel data={this.state.alldata['4']} city={this.state.citytitle} />
        </div>
      </div>
    );
  }
}

export default MainForm;
