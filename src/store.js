import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index.js';

const initialState = {};
const middleware = [];

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
    applyMiddleware(...middleware),
  )
);

export default store;