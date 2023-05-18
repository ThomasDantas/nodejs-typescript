import { forbidden, ok } from '@/application/helpers/http'
import { HttpResponse } from '@/application/helpers'
import { RequiredFieldError } from '@/application/errors'
import { JwtTokenHandler } from '@/infra/gateways'

type HttpRequest = {
  authorization: string
}
type Model = Error | any

export class AuthenticationMiddleware {
  constructor (
    private readonly jwtTokenHandler: JwtTokenHandler
  ) { }

  async handle ({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    if (!this.validate({ authorization })) return forbidden()
    try {
      const token = await this.jwtTokenHandler.validate({ token: authorization })
      return ok(token)
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
