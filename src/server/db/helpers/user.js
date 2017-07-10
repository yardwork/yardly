import bcrypt from 'bcrypt-nodejs'

import User from '../models/user'

export function findAll(cb) {
  User.find({}, cb)
}

export function findOne(username, cb) {
  User.findOne({ username }, cb)
}

export function insertOne(username, password, cb) {
  bcrypt.hash(password, null, null, (a, hashedPassword) => {
    User.create({ username, password: hashedPassword }, cb)
  })
}

// add address
// edit address
// remove address
// add/edit contactInfo
