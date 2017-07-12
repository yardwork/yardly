import mongoose from 'mongoose'
import User from './src/server/db/models/user'
import Worker from './src/server/db/models/worker'
import userSeedData from './src/server/db/userSeedData'
import workerSeedData from './src/server/db/workerSeedData'

mongoose.connect('mongodb://localhost/yardly_dev')

const models = {
  user: User,
  worker: Worker,
}

const data = {
  user: userSeedData,
  worker: workerSeedData,
}

const promiseArray = []

Object.keys(data).forEach((key) => {
  const child = data[key]
  const model = key
  // console.log(models[model])
  for (let i = 0; i < child.length; i += 1) {
    const m = new models[model](child[i])
    promiseArray.push(m.save())
  }
})
Promise.all(promiseArray).then(() => mongoose.disconnect())
