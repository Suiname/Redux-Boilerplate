import React, { Component } from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {errmsg: ''}
  }

  componentDidMount(){
    window.addEventListener('keydown', function(e){
      if(e.which === 13){
        this.handleRegister(e);
      }
    }.bind(this));
  }

  handleRegister(e) {
    var user = {
      password: this.refs.password.value,
      username: this.refs.username.value
    };

    $.ajax({
      url: '/auth/registerUser',
      type: 'POST',
      dataType: 'json',
      data: user,
      success: function(data) {
        this.context.router.push('/');
      }.bind(this),
      error: function(err) {
        console.log('error', err);
        this.setState((state) => {
          state.errmsg = "Username and/or Password are incorrect";
          return state;
        });
      }.bind(this)
    });
  }

render() {
  return (
    <div id='registrationPage'>
      <div className='overlay'><img className='background' src='/images/blueback.jpg'/></div>
      <div className="container">
        <div className="row">
            <div id="registrationbox" className="col s6 push-s3 loginbox white lighten-3">
            <img src="/images/logo.png" className="responsive-img login-logo" />
            <div className='login-type'> Internal Tools </div>
            <div className="input-field col s10 push-s1">
              <input ref='username' type="text" id="username" className="loginForm black-text" placeholder='Username'/>
            </div>
            <div className="input-field col s10 push-s1">
              <input ref='password' type="password" id="password" className="loginForm validate black-text" placeholder='Password'/>
            </div>
            <div className="col s12">
              <div className="center-align">
                <input id='register' className="btn blue darken-3" type="submit" onClick={this.handleRegister.bind(this)} value="Register"/>
                <div className="errmsg center-align red-text">{this.state.errmsg}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

Register.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Register;
