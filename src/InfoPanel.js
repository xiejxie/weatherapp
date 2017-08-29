import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';

class InfoPanel extends Component {

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
      wind_speed: Number(someprops.data.wind_speed).toFixed(1),
      wind_direction: Number(someprops.data.wind_direction).toFixed(1),
      min_temp: Number(someprops.data.min_temp).toFixed(0),
      max_temp: Number(someprops.data.max_temp).toFixed(0),
      humidity: Number(someprops.data.humidity).toFixed(0),
      visibility: Number(someprops.data.visibility).toFixed(0)
    };
  }

  render() {
    return (
      <Col md={3}>
      <div className="text-left tableitem">
        <p className="header1">Info</p>
        <Table className="infotable" hover>
          <tbody>
            <tr>
              <td><div className="tablehead">Min/Max Temp</div></td>
              <td>▲{this.state.max_temp} ▼{this.state.min_temp}</td>
            </tr>
            <tr>
              <td><div className="tablehead">>Wind Speed</div></td>
              <td>{this.state.wind_speed} mph</td>
            </tr>
            <tr>
              <td><div className="tablehead">Wind Direction</div></td>
              <td>{this.state.wind_direction} °</td>
            </tr>
            <tr>
              <td><div className="tablehead">Humidity</div></td>
              <td>{this.state.humidity} %</td>
            </tr>
            <tr>
              <td><div className="tablehead">Visibility</div></td>
              <td>{this.state.visibility} miles</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </Col>
    )
  };

}

export default InfoPanel;
