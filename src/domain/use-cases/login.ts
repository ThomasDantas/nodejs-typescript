import { DataUserError } from '@/domain/services/errors'

type Setup = () => Login

type Input = { nome: string  }
type Output = { nome: string }
export type Login = (params: Input) => Promise<Output>

export const setupLogin: Setup = () => async params => {
  if (params) return params
  throw new DataUserError()
}
