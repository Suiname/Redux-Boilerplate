import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Form from './Form'

import isLoggedIn from '../utils/LoginAuth'

export default (
  <Route path='/'>
    <IndexRoute component={Login} />
    <Route path='/form' component={Form} />
  </Route>
)
