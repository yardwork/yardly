export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = num => `/ajax/hello/${num || ':num'}`

export const USERS_INDEX = '/users'
export const USERS_SHOW = '/users/:id'
export const USERS_CREATE = '/users'
export const USERS_UPDATE = '/users/:id'
export const USERS_DELETE = '/users/:id'

export const WORKERS_INDEX = '/workers'
export const WORKERS_SHOW = '/workers/:id'
export const WORKERS_CREATE = '/workers'
export const WORKERS_UPDATE = '/workers/:id'
export const WORKERS_DELETE = '/workers/:id'

export const usersShowRoute = id =>
  `/users/${id || ':id'}`

export const usersUpdateRoute = id =>
  `/users/${id || ':id'}`

export const usersDeleteRoute = id =>
  `/users/${id || ':id'}`

export const workersShowRoute = id =>
  `/workers/${id || ':id'}`

export const workersUpdateRoute = id =>
  `/workers/${id || ':id'}`

export const workersDeleteRoute = id =>
  `/workers/${id || ':id'}`
