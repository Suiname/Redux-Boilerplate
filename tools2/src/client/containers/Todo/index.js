import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadTodo, addTodo, toggleTodo } from '../../actions';

//Load Components
import TodoList from './resources/TodoList';
import TodoInput from './resources/TodoInput';

class Todo extends Component {
  handleClick(e) {
    this.props.loadTodo('/api/randomtodo');
  }
  toggleList() {

  }
  render() {
    return (
      <div>
        <button className='btn' onClick={this.handleClick.bind(this)}> Load External Todos </button>
        <TodoInput addTodo={this.props.addTodo}/>
        <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}/>
        <button className='btn' onClick={this.toggleList.bind(this)}> Toggle Completed </button>
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
  return bindActionCreators({ addTodo, loadTodo, toggleTodo }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)
