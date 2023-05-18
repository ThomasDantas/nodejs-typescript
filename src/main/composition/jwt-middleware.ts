import { AuthenticationMiddleware } from '@/application/middlewares'
import { JwtTokenHandler } from '@/infra/gateways'
import { env } from '@/main/config'

export const makeAuthenticationMiddleware = (authorization: string): any => {
  const jwt = new JwtTokenHandler(env.jwtSecret)
  const auth = new AuthenticationMiddleware(jwt)
  return auth.handle({ authorization })
}
