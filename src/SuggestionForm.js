import React from 'react';
import { createStore } from 'redux';
import { weatherApp } from './container';
import { addSuggestion } from './container';

let store = createStore(weatherApp);

/*
  Change the store state to reflect add the most recent search
*/
export function addCitySuggestion(city) {
  store.dispatch(addSuggestion(city));
}

/*
  List the most recent 5 searches
*/
class Suggestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
    };

    store.subscribe(() => {
      this.setState({
        suggestions: store.getState().suggestions
      });
    });
  }
  render() {
    var suggestionrows = [];
    for (var i = this.state.suggestions.length-1; i >= 0; i--) {
      suggestionrows.push(
        <option key={i} value={this.state.suggestions[i].text} />
      );
    }
    return (
      <datalist id="suggestions" className="a">
        {suggestionrows}
      </datalist>
    )
  }
}

Suggestions.defaultProps = {};

export default Suggestions;
