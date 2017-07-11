import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'

import usersRoute from './routes/users'
import workersRoute from './routes/workers'
import routing from './routing'
import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
// import db from './db/config'

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(bodyParser.json())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.use('/api', workersRoute, usersRoute)
routing(app)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
