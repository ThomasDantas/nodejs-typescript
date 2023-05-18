import { badRequest, HttpResponse, ok } from '@/application/helpers'

const users = [
  {
    user: 'Teste',
    email: 'teste@gmail.com',
  },
  {
    user: 'Teste2',
    email: 'teste1@gmail.com',
  },
];

type Input = { nome: string, acao: string }
type Model = Error | { nome: string }

export class GetUserController {
  constructor() {
  }

  async perform({ nome, acao }: Input): Promise<HttpResponse<Model>> {
    try {
      return ok({ nome, acao });
    } catch (err: any) {
     return badRequest(err)
    }
  }
}
