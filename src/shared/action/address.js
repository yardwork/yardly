import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { usersUpdateRoute } from '../../shared/routes'
// import store from '../../server/init-store'

export const ADD_ADDRESS_ASYNC_REQUEST = 'ADD_ADDRESS_ASYNC_REQUEST'
export const ADD_ADDRESS_ASYNC_SUCCESS = 'ADD_ADDRESS_ASYNC_SUCCESS'
export const ADD_ADDRESS_ASYNC_FAILURE = 'ADD_ADDRESS_ASYNC_FAILURE'

export const addAddressAsyncRequest = createAction(ADD_ADDRESS_ASYNC_REQUEST)
export const addAddressAsyncSuccess = createAction(ADD_ADDRESS_ASYNC_SUCCESS)
export const addAddressAsyncFailure = createAction(ADD_ADDRESS_ASYNC_FAILURE)

export const addAddressAsync = (id, values) => (dispatch) => {
  // const state = store.getState()
  // const address = state.form.addressForm.values
  dispatch(addAddressAsyncRequest())
  return fetch('/api' + usersUpdateRoute(id), { headers: { 'Content-type': 'application/json' }, method: 'PUT', body: JSON.stringify(values) })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      console.log('data', data)
      dispatch(addAddressAsyncSuccess(data))
    })
    .catch(() => {
      dispatch(addAddressAsyncFailure())
    })
}
