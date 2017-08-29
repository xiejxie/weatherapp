import MainForm from '../MainForm';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('Testing Suggestion', () => {

  var comp = ReactTestUtils.renderIntoDocument(<MainForm />);
  var rdom = () => ReactDOM.findDOMNode(comp);

  it("tests initial conditions", function() {
    var initialstate = {"alert": false, "alldata": [{"humidity": "",
    "max_temp": "", "min_temp": "", "visibility": "", "wind_direction": "",
    "wind_speed": ""}, {"abbr": "", "the_temp": "", "weatherstate": ""},
    {"abbr": "", "the_temp": "", "weatherstate": ""},
    {"abbr": "", "the_temp": "", "weatherstate": ""},
    {"abbr": "", "the_temp": "", "weatherstate": ""}],
    "animation": false, "open": true};
    expect(comp.state).toEqual(initialstate);
    expect(rdom().children.length).toEqual(3);
  });

  it("tests input", function() {
    var mutcomp = ReactTestUtils.renderIntoDocument(<MainForm />);
    var inputbox = ReactTestUtils.findRenderedDOMComponentWithClass(mutcomp, 'inputform');
    inputbox.value = 'help';
    ReactTestUtils.Simulate.change(inputbox);
    var mutatedstate = {"alert": false, "alldata": [{"humidity": "",
    "max_temp": "", "min_temp": "", "visibility": "", "wind_direction": "",
    "wind_speed": ""}, {"abbr": "", "the_temp": "", "weatherstate": ""},
    {"abbr": "", "the_temp": "", "weatherstate": ""}, {"abbr": "", "the_temp":
    "", "weatherstate": ""}, {"abbr": "", "the_temp": "", "weatherstate": ""}],
    "animation": false, "open": true, "text": "help"};
    expect(mutcomp.state).toEqual(mutatedstate);
  });

  it("tests submit", function() {
    var mutcomp = ReactTestUtils.renderIntoDocument(<MainForm />);
    var inputbox = ReactTestUtils.findRenderedDOMComponentWithClass(mutcomp, 'inputform');
    inputbox.value = 'London';
    ReactTestUtils.Simulate.change(inputbox);
    ReactTestUtils.Simulate.keyDown(inputbox, {key: "Enter", keyCode: 13, which: 13});
    var submitbox = ReactTestUtils.findRenderedDOMComponentWithClass(mutcomp, 'submitbut');
    ReactTestUtils.Simulate.click(submitbox);
  });

});
