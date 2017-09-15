const reducer = (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('');
  }else if (action.type === 'add_character') {
    return [...state, action.payload];
  }
  
  return state;
};
const store = Redux.createStore(reducer);

const action = {
  type: 'split_string',
  payload: 'asdf'
};

const action2 = {
  type: 'add_character',
  payload: 'a'
  
};

store.dispatch(action);

store.dispatch(action2);

store.getState();

/* 
Out put:
{"type":"split_string","payload":"asdf"}
{"type":"add_character","payload":"a"}
["a","s","d","f","a"]
*/