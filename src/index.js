/*
    ./client/index.js
    which is the webpack entry file

	import { Router, Route, browserHistory } from 'react-router'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import App from './app/App.jsx';

// Import all of our components
import App from './App'
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'
// import SignUp from './sign-up/SignUp.jsx';
import './index.css'


// Import the index reducer and sagas
import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas)

ReactDOM.render(
  <Provider store={store}>
    <App>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/widgets" component={Widgets} />
      </Switch>
    </BrowserRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);