import { GetUserController } from "@/application/controllers/users"

export class GetUserRouterComposer {
  static compose () {
    return new GetUserController()
  }
}