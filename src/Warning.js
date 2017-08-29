import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.animation,
      open: this.props.open,
      content: this.props.text
    };
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.animation !== this.state.text && nextProps.open )
      this.setState({ content: nextProps.text, text: nextProps.animation, open: nextProps.open});
      else if (!nextProps.open)
      this.setState({ content: this.state.content, text: this.state.text, open: nextProps.open});
  }

  render() {
    return (
      <div>
        <Collapse in={this.state.open}>
        <div>
        <CSSTransitionGroup transitionName="warninganimation" transitionEnterTimeout={1000} transitionLeave={false}>
          <div className="warning" key={this.state.text}>
              <p>Data on "{this.state.content}" is not available at this time</p>
          </div>
        </CSSTransitionGroup>
        </div>
        </Collapse>
      </div>
    );
  }
}

export default Warning;
