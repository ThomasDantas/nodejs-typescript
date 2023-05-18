import { setupLogin } from "@/domain/use-cases/login"
import { LoginController } from "@/application/controllers/login"

export class LoginRouterComposer {
  static compose () {
    const setup = setupLogin()
    return new LoginController(setup)
  }
}