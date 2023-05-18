import { forbidden, ok } from '@/application/helpers/http'
import { HttpResponse } from '@/application/helpers'
import { RequiredFieldError } from '@/application/errors'
import { JwtTokenHandler } from '@/infra/gateways'

type HttpRequest = {
  authorization: string
}
type Model = Error | { nome: string }

export class AuthenticationUserMiddleware {
  constructor (
    private readonly jwtTokenHandler: JwtTokenHandler
  ) { }

  async perform ({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    if (this.validate({ authorization })) return forbidden()
    try {
      const data = await this.jwtTokenHandler.validate({ token: authorization })
      return ok({ nome: data })
    } catch {
      return forbidden()
    }
  }

  private validate({ authorization }: HttpRequest): Error | undefined {
    if (authorization === undefined || authorization === '') {
      return new RequiredFieldError(authorization)
    }
  }
}
