import bcrypt from 'bcrypt-nodejs'

import Worker from '../models/worker'

export function findAll(cb) {
  Worker.find({}, cb)
}

export function findOne(username, cb) {
  Worker.findOne({ username }, cb)
}

export function insertOne(username, password, services, area, cb) {
  bcrypt.hash(password, null, null, (a, hashedPassword) => {
    Worker.create({ username, password: hashedPassword, services, area }, cb)
  })
}
