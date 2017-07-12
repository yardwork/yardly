import express from 'express'
import bcrypt from 'bcrypt-as-promised'

import User from '../db/models/user'

import {
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_DELETE,
} from '../../shared/routes'

/* export const USERS_INDEX = '/users'
export const USERS_SHOW = '/users/:id'
export const USERS_CREATE = '/users'
export const USERS_UPDATE = '/users/:id'
export const USERS_DELETE = '/users/:id'*/

const router = express.Router()

router.get(USERS_SHOW, (req, res, next) => {
  const { id } = req.params

  User
    .findById(id)
    .then((user) => {
      if (user) {
        res.json(user)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.get(USERS_INDEX, (req, res, next) => {
  User
    .find({})
    .then((users) => {
      res.json(users)
    })
    .catch(next)
})

router.post(USERS_CREATE, (req, res, next) => {
  const password = req.body.password
  bcrypt.hash(password)
    .then((hashedPassword) => {
      const user = new User({ username: req.body.username, password: hashedPassword })
      user
        .save()
        .then((newUser) => {
          res.status(201).json(newUser)
        })
        .catch(next)
    })
})

router.delete(USERS_DELETE, (req, res, next) => {
  const { id } = req.params

  User
    .findById(id)
    .then((user) => {
      if (user) {
        user.remove()
          .then((deletedUser) => {
            res.json(deletedUser)
          })
          .catch(next)
      }
    })
})

export default router
