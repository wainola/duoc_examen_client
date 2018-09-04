import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/index'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import Api from './api'
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css'

// import App from './routes'

const middlewares = [ reduxThunk, logger ]
const enhancers = applyMiddleware(...middlewares)
const store = createStore(rootReducer, composeWithDevTools(enhancers))


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={Router} />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
