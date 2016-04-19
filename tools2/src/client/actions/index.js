import { API_CALL } from '../store/middleware/api';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants'

export function loadTodo(url) {
  return function(dispatch) {
    return API_CALL(url).then((todo) => {
      dispatch(addTodo(todo));
    });
  };
}
