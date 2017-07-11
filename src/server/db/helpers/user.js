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
insertOne('asdf', 'asdf', () => {})
// add address
export function addAddress(username, address) {
  findOne(username, (error, user) => {
    if (error) throw error
    user.addresses.push(address)
    user.save()
  })
}
// edit address
export function editAddress(username, address) {
  findOne(username, (error, user) => {
    if (error) throw error
    const newUser = user
    for (let i = 0; i < newUser.addresses.length; i += 1) {
      if (newUser.addresses[i] === address) {
        newUser.addresses[i] = address
        break
      }
    }
    newUser.save()
  })
}

// remove address
export function removeAddress(username, address) {
  findOne(username, (error, user) => {
    if (error) throw error
    for (let i = 0; i < user.addresses.length; i += 1) {
      if (user.addresses[i] === address) {
        user.addresses.splice(i, 1)
        break
      }
    }
    user.save()
  })
}

// add/edit contactInfo
