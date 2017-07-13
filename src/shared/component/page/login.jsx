import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'

const LoginPage = () =>
  (<div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <h1>Click here to login with Facebook as a user!</h1>
    <button type="button">Click Me!</button>
    <h1>Click here to login with Facebook as a worker!</h1>
    <button type="button">Click Me!</button>
  </div>)

export default LoginPage
