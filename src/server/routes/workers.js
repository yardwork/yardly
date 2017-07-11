import express from 'express'

import Worker from '../db/models/worker'

import {
  WORKERS_INDEX,
  WORKERS_SHOW,
  WORKERS_CREATE,
  WORKERS_DELETE,
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
  const worker = new Worker(req.body)

  worker
    .save()
    .then((newWorker) => {
      res.status(201).json(newWorker)
    })
    .catch(next)
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

export default router
