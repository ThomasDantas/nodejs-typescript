import { serverError, HttpResponse, ok, badRequest} from '@/application/helpers'
import { JwtTokenHandler } from '@/infra/gateways';
import { RequiredFieldError } from '@/application/errors';

type Input = { nome: string }
type Model = Error | { AccessToken: string }

export class CreateUserController {
  constructor(private readonly jwt: JwtTokenHandler) {
    this.jwt = jwt
  }

  async perform({ nome }: Input): Promise<HttpResponse<Model>> {
    const error = this.validate({ nome })
    if (error) return badRequest(error)
    try {
      const token = await this.jwt.generate({ key: nome })
      return ok({ AccessToken: token });
    } catch (err: unknown) {
      return serverError(err)
    }
  }

  private validate({ nome }: Input): Error | undefined {
    if (nome === undefined || nome === '') {
      return new RequiredFieldError("nome")
    }
  }
}
