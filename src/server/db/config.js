import mongoose from 'mongoose'
import MONGO_DEV_URI from '../../shared/config'

mongoose.connect(MONGO_DEV_URI)

const db = mongoose.connection

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

db.once('open', () => {
// eslint-disable-next-line no-console
  console.log('MongoDB connection open')
})

export default db
