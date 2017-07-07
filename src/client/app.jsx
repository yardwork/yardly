import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'

const App = () =>
  (<div>
    <h1>Hello React Component NATE!</h1>
    <h1>{APP_NAME}</h1>
    <HelloAsyncButton />
    <Message />
    <HelloButton />
    <MessageAsync />
  </div>)


export default App
