import React, { Component } from 'react'
import { RaisedButton, TextField } from 'material-ui'

import LoginLogo from '../_static/images/logo.png'
import BackgroundImg from '../_static/images/background.jpg'

import { PostFetch } from '../utils/api'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      errmsg: '',
      password: '',
      username: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.usernameInput = this.usernameInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
  }
  handleLogin(e) {
    var credentials = {
      password: this.state.password,
      username: this.state.username
    };

    PostFetch({
      url: '/auth/login',
      body: credentials,
      success: (json) => {
        if(json == "balaji"){
          this.context.router.push('/genetext');
        } else {
          this.context.router.push('/form');
        }
      },
      error: (err) => {
        this.setState((state) => {
          state.errmsg = "Username and/or Password are incorrect";
          return state;
        });
      }
    });
  }
  usernameInput(e) {
    let username = e.target.value;
    this.setState((state) => {
      state.username = username;
      return state;
    })
  }
  passwordInput(e) {
    let password = e.target.value;
    this.setState((state) => {
      state.password = password;
      return state;
    })
  }
  render() {
    return (
      <div>
        <div className='backdrop'>
          <img src={BackgroundImg} className='backdrop-img'/>
        </div>
          <div className='container'>
            <div id='login-box' className='shadow'>
              <div className='row'>
                <img src={LoginLogo} className='login-logo'/>
              </div>
              <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                  <TextField
                    type={'text'}
                    fullWidth={true}
                    floatingLabelText={'Username'}
                    value={this.state.username}
                    onChange={this.usernameInput}/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                  <TextField
                    type={'password'}
                    fullWidth={true}
                    floatingLabelText={'Password'}
                    value={this.state.password}
                    errorText={this.state.errmsg}
                    onChange={this.passwordInput}/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                  <RaisedButton
                    label='Login'
                    fullWidth={true}
                    secondary={true}
                    onClick={this.handleLogin}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login;
