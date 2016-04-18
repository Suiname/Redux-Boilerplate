import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className='todo'>
        {this.props.todo.text}
      </div>
    )
  }
}

export default TodoItem
