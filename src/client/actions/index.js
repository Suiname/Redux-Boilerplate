import { API_CALL } from '../store/middleware/api';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function toggleTodo(id) {
  type: TOGGLE_TODO,
  id
}

export function loadTodo(url) {
  return function(dispatch) {
    return API_CALL(url).then((todo) => {
      console.log('Getting called');
      dispatch(addTodo(todo));
    });
  };
}
