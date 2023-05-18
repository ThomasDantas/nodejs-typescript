import { TokenGenerator } from '@/domain/contracts/gateways'
import { DataUserError } from '@/domain/services/errors'

type Setup = (token: TokenGenerator) => CreateUser

type Input = { nome: string }
type Output = { accessToken: string }
export type CreateUser = (params: Input) => Promise<Output>

export const setupCreateUser: Setup = (token) => async params => {
  const accessToken = await token.generate({ key: params.nome })
  if (accessToken) return { accessToken }
  throw new DataUserError()
}
