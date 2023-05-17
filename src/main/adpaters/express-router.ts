import { RequestHandler } from 'express'

type Adapter = (controller: Function) => RequestHandler

export const adaptExpressRoute: Adapter = controller => async (req, res) => {
  const { statusCode, data } = await controller({ ...req.body, ...req.locals })
  const json = [200, 201, 204].includes(statusCode) ? data : { error: data.message }
  res.status(statusCode).json(json)
}
