import { CreateUserController } from "@/application/controllers/users"
import { JwtTokenHandler } from "@/infra/gateways"
import { env } from "@/main/config"

export class CreateUserRouterComposer {
  static compose () {
    const jwt = new JwtTokenHandler({ secret: env.jwtSecret, expirationInHour: env.expireIn })
    return new CreateUserController(jwt)
  }
}