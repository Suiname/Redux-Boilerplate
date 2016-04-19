import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {todo, toggleTodo} = this.props;
    let style = null
    if (todo.completed) style = {
      "text-decoration": "line-through"
    }
    return (
      <div style={style} className='todo' onClick={(e) => { toggleTodo(todo.id)}}>
        {todo.text}
      </div>
    )
  }
}

export default TodoItem
