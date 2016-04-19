import { ADD_TODO, TOGGLE_TODO } from '../../constants';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        completed: false,
        id: (state.length + 1),
        text: action.text
      }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if ((index + 1) == action.id) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo;
      });
    default:
      return state;
  }
}
