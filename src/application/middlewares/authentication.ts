import { forbidden, ok } from '@/application/helpers/http'
import { HttpResponse } from '@/application/helpers'
import { RequiredFieldError } from '@/application/errors'

type HttpRequest = {
  authorization: string
}
type Model = Error | { userId: string }
type Authorize = (params: { token: string }) => Promise<string>
export class AuthenticationMiddleware {
  constructor (private readonly authorize: Authorize) {}

  async handle ({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    if (!this.validate({ authorization })) return forbidden()
    try {
      const userId = await this.authorize({ token: authorization })
      return ok({ userId })
    } catch {
      return forbidden()
    }
  }

  private validate({ authorization }: HttpRequest): Error | undefined {
    if (authorization !== undefined || authorization === '') {
      return new RequiredFieldError(authorization)
    }
  }
}
