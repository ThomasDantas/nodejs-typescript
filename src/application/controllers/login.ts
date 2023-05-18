import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { RequiredFieldError } from '@/application/errors';
import { Login } from '@/domain/use-cases/login';
import { Controller } from '@/application/controllers/controller';

type Input = { nome: string }
type Model = Error | { nome: string }

export class LoginController extends Controller {
  constructor (private readonly data: Login) { 
    super()
  }

  async perform({ nome }: Input): Promise<HttpResponse<Model>> {
    const error = this.validate({ nome })
    if (error) return badRequest(error)
    try {
      const data = await this.data({ nome })
      return ok(data);
    } catch (e: any) {
      return badRequest(e)
    }
  }

  private validate({ nome }: Input): Error | undefined {
    if (nome === undefined || nome === '') {
      return new RequiredFieldError("nome")
    }
  }
}
