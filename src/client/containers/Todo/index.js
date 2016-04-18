import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadTodo, addTodo } from '../../actions';

//Load Components
import TodoList from './resources/TodoList';
import TodoInput from './resources/TodoInput';

class Todo extends Component {
  handleClick(e) {
    this.props.loadTodo('/api/randomtodo');
  }
  render() {
    return (
      <div>
        <button className='btn' onClick={this.handleClick.bind(this)}> Load External Todos </button>
        <TodoInput addTodo={this.props.addTodo}/>
        <TodoList todos={this.props.todos} actions={this.props}/>
      </div>
    )
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, loadTodo }, dispatch)
}

console.log(mapDispatchToProps(), 'props');


export default connect(mapStateToProps, mapDispatchToProps)(Todo)
