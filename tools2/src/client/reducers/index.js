import { combineReducers } from 'redux';
import todos from './Todo';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
