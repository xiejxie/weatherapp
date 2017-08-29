import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class SubPanel extends Component {

  constructor(props) {
    super(props);
    this.state = this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.state.city) {
      this.setState(this.updateState(nextProps));
    }
  }

  updateState(someprops) {
    return {
      header: someprops.data.applicable_date,
      temp: Number(someprops.data.the_temp).toFixed(0)+" °C",
      weatherstate: someprops.data.weather_state_name,
      abbr: someprops.data.weather_state_abbr,
      city: someprops.city
    };
  }

  render() {
    return (
      <Col md={3}>
        <Panel className="SmallPanel hvr-float" header={this.state.header}>
          <CSSTransitionGroup transitionName="fadeindelay" transitionEnterTimeout={3000} transitionLeave={false}>
            <div key={this.state.temp+this.state.abbr}>
              <p className="WeatherInfo">{this.state.temp}</p>
              <img width="150" height="150" id="weather image" alt=""
              src={'https://www.metaweather.com/static/img/weather/'+this.state.abbr+'.svg'}></img>
              <br/>
              <br/>
              <br/>
              <p>{this.state.weatherstate}</p>
            </div>
          </CSSTransitionGroup>
        </Panel>
      </Col>
    )
  }

}

export default SubPanel;
