import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div className='todo-list'>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} toggleTodo={this.props.toggleTodo}/>
          )
        })}
      </div>
    )
  }
}

export default TodoList;
