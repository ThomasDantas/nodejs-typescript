import { RequestHandler } from 'express'

type Adapter = (middleware: any) => RequestHandler

export const expressMiddleware: Adapter = middleware => async (req, res, next) => {
  const auth = req.headers.authorization
  if (auth !== undefined) req.headers.authorization = auth.split(' ')[1]
  const { statusCode, data } = await middleware.perform({ ...req.headers })
  if (statusCode === 200) {
    const entries = Object.entries(data).filter(entry => entry[1])
    req.locals = { ...req.locals, ...Object.fromEntries(entries) }
    next()
  } else {
    res.status(statusCode).json({ error: data.message })
  }
}
