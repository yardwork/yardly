const initialState = {
  address: {
    address: '',
    city: '',
    state: '',
    zipCode: '',
  },
}

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      return { ...state, data: action.data }
    default:
      return state
  }
}

// export const load = data => ({ type: 'LOAD', data })

export default addressReducer
