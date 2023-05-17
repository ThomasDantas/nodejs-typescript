import { Router } from 'express'

export default (router: Router): void => {
  router.get('/index', (req, res, next) => {
    res.json({ data: 'API Rest v1.0.0' })
  })
}
