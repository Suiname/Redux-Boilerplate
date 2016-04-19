import React, { Component, PropTypes } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }
  componentDidMount() {
    let width = Math.floor(100 / this.props.fieldsPerRow) + '%';
    $('.form-field').css({
      width: width
    });
  }
  render() {
    return (
      <div className='custom-form'>
        <FormList formFields={this.props.formFields}/>
      </div>
    )
  }
}

const FormList = ({formFields}) => {
  let forms = formFields.map((field, i) => {
    return (
      <FormField key={i} field={field}/>
    )
  })
  return (
    <div className='form-list'>
      {forms}
    </div>
  )
}

const FormField = ({ field }, context) => {
  let value = '';
  if (context.formInfo.hasOwnProperty(field)) {
    value = context.formInfo[field];
  };
  return (
    <div className='form-field'>
      <div className='form-label'>{field}</div>
      <input type='text' id={'formfield_' + field} onChange={context.handleInputChange} value={value}/>
    </div>
  )
}

FormField.contextTypes = {
  handleInputChange: PropTypes.func,
  formInfo: PropTypes.object
}


export default Form;
