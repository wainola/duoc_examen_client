import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from  'redux-devtools-extension'

import { successGoogleLogin, action } from './actions/index'
// Styles
import 'semantic-ui-css/semantic.min.css';
// Routes
import Router from './Router/index'

const middlewares = [reduxThunk, logger]
const enhancers = applyMiddleware(...middlewares)
const store = createStore(
  rootReducer,
  enhancers
)

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route component={Router} />
  </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
