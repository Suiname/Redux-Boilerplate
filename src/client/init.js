import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import React from 'react';

// Load Global CSS
import './_static/css/main.css';

import configureStore from './store/configureStore';

const initialState = {}
const store = configureStore(initialState)


import routes from './routes';

render((
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
