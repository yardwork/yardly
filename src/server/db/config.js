import mongoose from 'mongoose'
import { MONGO_DEV_URI } from '../../shared/config'

mongoose.Promise = global.Promise
mongoose.connect(MONGO_DEV_URI)

const promise = mongoose.createConnection(MONGO_DEV_URI, {
  useMongoClient: true,
})

promise.then((db) => {
  db.openUri(MONGO_DEV_URI, { /* options */ })
  // eslint-disable-next-line no-console
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('MongoDB connection open')
  })
})

export default promise
