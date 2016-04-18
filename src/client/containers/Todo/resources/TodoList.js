import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    console.log(this.props.todos, 'LIST');
    return (
      <div className='todo-list'>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo}/>
          )
        })}
      </div>
    )
  }
}

export default TodoList;
