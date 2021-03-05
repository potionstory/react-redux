import { combineReducers } from 'redux';
import counter from './counter';
import rtCounter from './rtCounter';
import post from './post';

const rootReducer = combineReducers({
  counter,
  rtCounter,
  post,
});

export default rootReducer;