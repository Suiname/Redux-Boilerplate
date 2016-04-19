import React, { PropTypes, Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ''};
  }
  handleChange(e) {
    let value = e.target.value;
    this.setState((state) => {
      state.text = value;
      return state;
    })
  }
  handleKeydown(e) {
    let text = e.target.value.trim();
    if (e.which === 13) {
      this.props.addTodo(text);
      this.setState({text: ''});
    }
  }
  render() {
    return (
      <input type='text'
        placeholder='Enter a item...'
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeydown.bind(this)}
        value={this.state.text}
      />

    )
  }
}

export default TodoInput;
