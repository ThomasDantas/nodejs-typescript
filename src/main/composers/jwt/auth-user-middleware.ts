import { AuthenticationUserMiddleware } from '@/application/middlewares'
import { JwtTokenHandler } from '@/infra/gateways'
import { env } from '@/main/config'

export class AuthUserMiddleware {
  static compose () {
    const jwt = new JwtTokenHandler({ secret: env.jwtSecret, expirationInHour: env.expireIn })
    return new AuthenticationUserMiddleware(jwt)
  }
}