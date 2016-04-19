import React, { Component, PropTypes } from 'react';

// Load Route Containers
import PatientInfo from '../containers/PatientInfo'

class Form extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <PatientInfo />
      </div>
    )
  }
}

export default Form;
