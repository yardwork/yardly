import express from 'express'
import mongoose from 'mongoose'

import bcrypt from 'bcrypt-as-promised'

import Worker from '../db/models/worker'

import {
  WORKERS_INDEX,
  WORKERS_SHOW,
  WORKERS_CREATE,
  WORKERS_DELETE,
  WORKERS_UPDATE,
} from '../../shared/routes'

const router = express.Router()

router.get(WORKERS_SHOW, (req, res, next) => {
  const { id } = req.params

  Worker
    .findById(id)
    .then((worker) => {
      if (worker) {
        res.json(worker)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.get(WORKERS_INDEX, (req, res, next) => {
  Worker
    .find({})
    .then((workers) => {
      res.json(workers)
    })
    .catch(next)
})

router.post(WORKERS_CREATE, (req, res, next) => {
  const { username, password, services, area, firstName, lastName } = req.body

  bcrypt.hash(password)
    .then((hashedPW) => {
      const user = new Worker({ username, password: hashedPW, services, area, firstName, lastName })
      user
        .save()
        .then((newUser) => {
          res.status(201).json(newUser)
        })
        .catch(next)
    })
})

router.delete(WORKERS_DELETE, (req, res, next) => {
  const { id } = req.params

  Worker
    .findById(id)
    .then((worker) => {
      if (worker) {
        worker.remove()
          .then((deletedWorker) => {
            res.json(deletedWorker)
          })
          .catch(next)
      }
    })
})

router.put(WORKERS_UPDATE, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Worker
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    )
    .then((listing) => {
      if (listing) {
        res.json(listing)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
