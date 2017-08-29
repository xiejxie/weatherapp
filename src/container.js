/*
  The initial state
*/
const INIT = {
  size: 0,
  suggestions: []
}

/*
  Return add suggestion action
*/
export function addSuggestion(text) {
  return { type: 'ADD_SUGGESTION', text}
}

/*
  Reducer
*/
export function weatherApp(state = INIT, action) {
  switch (action.type) {
    case 'ADD_SUGGESTION':
      var sugsize = 5;
      var newsuggestions = [
        ...state.suggestions,
        { text: action.text }
      ];
      if (state.size < sugsize) {
        sugsize = state.size+1;
      }
      else {
        newsuggestions.shift();
      }
      return Object.assign({}, state, {
        size: sugsize,
        suggestions: newsuggestions
      });
    default:
      return state;
  }
}
