import { ADD_TODO } from '../../constants';


const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        completed: false,
        id: (state.length + 1),
        text: action.text
      }]
    default:
      return state;
  }
}
