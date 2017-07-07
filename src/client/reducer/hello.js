import { SAY_HELLO, SAY_HELLO_ASYNC_REQUEST, SAY_HELLO_ASYNC_SUCCESS, SAY_HELLO_ASYNC_FAILURE } from '../action/hello'

const initialState = {
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message from async call',
}

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { ...state, message: action.payload }
    case SAY_HELLO_ASYNC_REQUEST:
      return { ...state, messageAsync: 'loading...' }
    case SAY_HELLO_ASYNC_SUCCESS:
      return { ...state, messageAsync: action.payload }
    case SAY_HELLO_ASYNC_FAILURE:
      return { ...state, messageAsync: 'message did not load, message not received, check your connection' }
    default:
      return state
  }
}

export default helloReducer
