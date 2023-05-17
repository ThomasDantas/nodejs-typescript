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

type Model = Error | { user: string, email: string}[]

export default {
  async get(): Promise<HttpResponse<Model>> {
    try {
      return ok(users);
    } catch (err: any) {
     return badRequest(err)
    }
  },
  async create(): Promise<HttpResponse<Model>> {
    try {
      return ok(users);
    } catch (err: any) {
     return badRequest(err)
    }
  },
};
