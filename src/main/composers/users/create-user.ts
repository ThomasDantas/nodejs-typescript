import { CreateUserController } from "@/application/controllers/users"
import { setupCreateUser } from "@/domain/use-cases/user/create-user"
import { JwtTokenHandler } from "@/infra/gateways"
import { env } from "@/main/config"

export class CreateUserRouterComposer {
  static compose () {
    const jwt = new JwtTokenHandler({ secret: env.jwtSecret, expirationInHour: env.expireIn })
    const setupCreate = setupCreateUser(jwt)
    return new CreateUserController(setupCreate)
  }
}