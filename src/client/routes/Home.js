import React, { Component } from 'react'

// load statics
import Logo from '../_static/images/logo.png'

// load containers
import TodoContainer from '../containers/Todo'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <img src={Logo}/>
          </div>
        </div>
        <div className='row'>
          <TodoContainer />
        </div>
      </div>
    )
  }
}

export default Home
