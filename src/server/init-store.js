import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'

const initStore = (plainPartialState) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    preloadedState.hello = helloReducer(undefined, {})
      .merge(plainPartialState.hello)
  }

  return createStore(combineReducers({ hello: helloReducer }),
    preloadedState, applyMiddleware(thunkMiddleWare))
}

export default initStore
