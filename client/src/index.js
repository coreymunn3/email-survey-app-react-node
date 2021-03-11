import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import App from './App';
import './index.css';
// stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// redux setup
const initialState = {};
const middlewares = [thunkMiddleware];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// stripe setup
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <Router>
        <App />
      </Router>
    </Elements>
  </Provider>,
  document.getElementById('root')
);
