import { badRequest, HttpResponse, ok } from '@/application/helpers'
import { GetDataUser } from '@/domain/use-cases/user/get-user';
import { Controller } from '@/application/controllers/controller';

type Input = { nome: string, acao: string }
type Model = Error | { nome: string, acao: string }

export class GetUserController extends Controller {
  constructor (private readonly data: GetDataUser) { 
    super()
  }

  async perform({ nome, acao }: Input): Promise<HttpResponse<Model>> {
    try {
      const data = await this.data({ nome, acao })
      return ok(data);
    } catch (e: any) {
      return badRequest(e)
    }
  }
}
