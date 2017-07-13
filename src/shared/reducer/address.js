
import { ADD_ADDRESS_ASYNC_REQUEST, ADD_ADDRESS_ASYNC_SUCCESS, ADD_ADDRESS_ASYNC_FAILURE } from '../action/address'

const initialState = {
  user: {
    _id: "59656ea6fdf5df76da38772c",
    username: "stueeer",
    password: "passwordddss",
    __v: 0,
    addresses: [{
      address: '',
      city: '',
      state: '',
      zipCode: '',
    }],
  },
  addresses: [{
    address: '',
    city: '',
    state: '',
    zipCode: '',
  }],
  loading: false,
}

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS_ASYNC_REQUEST:
      return { ...state, loading: true }
    case ADD_ADDRESS_ASYNC_SUCCESS:
      return { ...state, user: action.payload }
    case ADD_ADDRESS_ASYNC_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default addressReducer
