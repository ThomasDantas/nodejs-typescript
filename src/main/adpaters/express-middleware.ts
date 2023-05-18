import { makeAuthenticationMiddleware } from '@/main/composition'

import { RequestHandler } from 'express'

type Adapter = () => RequestHandler

export const adaptExpressMiddleware: Adapter = () => async (req, res, next) => {
  const auth = req.headers.authorization
  if (auth !== undefined) req.headers.authorization = auth.split(' ')[1]
  const { statusCode, data } = await makeAuthenticationMiddleware(req.headers.authorization!)
  if (statusCode === 200) {
    const entries = Object.entries(data).filter(entry => entry[1])
    req.locals = { ...req.locals, ...Object.fromEntries(entries) }
    next()
  } else {
    res.status(statusCode).json({ error: data.message })
  }
}
