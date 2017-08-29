import { shallow } from 'enzyme';
import Suggestions from '../SuggestionForm';
import React from 'react';

describe('Testing Suggestion', () => {

  const wrapper = shallow(< Suggestions />);

  it('preliminary test', () => {
    expect(wrapper.length === 1).toEqual(true);
  });

  it('has correct type', () => {
    expect(wrapper.node.type).toEqual('datalist');
  });

  it('has correct default props', () => {
    var initialstate = { id: 'suggestions', className: 'a', children: [] };
    expect(wrapper.node.props).toEqual(initialstate);
  });

  it('has correct initial state', () => {
    var initialstate = {"suggestions": []};
    expect(wrapper.state()).toEqual(initialstate);
  });

  it('adds new suggestions properly', () => {
    var mutwrapper = shallow(< Suggestions />);
    expect(mutwrapper.find('option').length).toEqual(0);
    mutwrapper.setState({"suggestions": ['1', '2']});
    mutwrapper.update();
    expect(mutwrapper.find('option').length).toEqual(2);
    var childwrapper = mutwrapper.children();
  });
});
