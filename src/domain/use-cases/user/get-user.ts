import { DataUserError } from '@/domain/services/errors'

type Setup = () => GetDataUser

type Input = { nome: string, acao: string  }
type Output = { nome: string, acao: string }
export type GetDataUser = (params: Input) => Promise<Output>

export const setupGetDataUser: Setup = () => async params => {
  if (params) return params
  throw new DataUserError()
}
