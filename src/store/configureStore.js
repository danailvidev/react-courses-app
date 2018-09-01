// let middleware = [a, b]
// if (process.env.NODE_ENV !== 'production') {
//   const c = require('some-debug-middleware')
//   const d = require('another-debug-middleware')
//   middleware = [...middleware, c, d]
// }
//
// const store = createStore(
//   reducer,
//   preloadedState,
//   applyMiddleware(...middleware)
// )

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant())));
}
