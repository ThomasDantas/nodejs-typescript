import { setupGetDataUser } from "@/domain/use-cases/user/get-user"
import { GetUserController } from "@/application/controllers/users"

export class GetUserRouterComposer {
  static compose () {
    const setupGetData = setupGetDataUser()
    return new GetUserController(setupGetData)
  }
}