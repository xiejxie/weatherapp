import { shallow } from 'enzyme';
import React from 'react';
import { addSuggestion } from '../container.js'
import { weatherApp } from '../container.js'


describe('Testing action function', () => {

  it('tests addSuggestion', () => {
    var result = addSuggestion('foo');
    expect(result.type).toBe('ADD_SUGGESTION');
  })
})

describe('Testing reducer function', () => {

  it('tests adding one item to state with 0 suggestions', () => {
    const beginning = {size: 0, suggestions: []};
    const expectedvalue = {"size": 1, "suggestions": [{"text": "foo"}]};
    var action = addSuggestion('foo');
    var result = weatherApp(beginning, action);
    expect(result).toEqual(expectedvalue);
  })

  it('tests adding one item to state with 5 suggestions', () => {
    const beginning = {"size": 5,
    "suggestions": [{"text": "1"}, {"text": "2"}, {"text": "3"}, {"text": "4"},
    {"text": "5"}]};
    const expectedvalue = {"size": 5,
    "suggestions": [{"text": "2"}, {"text": "3"}, {"text": "4"},
    {"text": "5"}, {"text": "6"}]};
    var action = addSuggestion('6');
    var result = weatherApp(beginning, action);
    expect(result).toEqual(expectedvalue);
  })

  it('tests adding one item to state with 3 suggestions', () => {
    const beginning = {"size": 2,
    "suggestions": [{"text": "2"}, {"text": "3"}]};
    const expectedvalue = {"size": 3,
    "suggestions": [{"text": "2"}, {"text": "3"}, {"text": "4"}]};
    var action = addSuggestion('4');
    var result = weatherApp(beginning, action);
    expect(result).toEqual(expectedvalue);
  })

});
