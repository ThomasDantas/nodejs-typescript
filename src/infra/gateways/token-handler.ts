import jwt, { JwtPayload } from 'jsonwebtoken'

export type TokenGenerator = {
  secret?: string,
  key: string
  expirationInMs: number
}
export type TokenValidator = { secret?: string, token: string }

export type Output = string

export class JwtTokenHandler {
  constructor (
    private readonly secret: string
  ) { }

  async generate ({ expirationInMs, key }: TokenGenerator): Promise<Output> {
    const expirationInSeconds = expirationInMs / 1000
    return jwt.sign({ key }, this.secret, { expiresIn: expirationInSeconds })
  }

  async validate ({ token }: TokenValidator): Promise<Output> {
    const payload = jwt.verify(token, this.secret) as JwtPayload
    return payload.key
  }
}

// export default {
//   async generate ({ secret, expirationInMs, key }: TokenGenerator): Promise<Output> {
//     const expirationInSeconds = expirationInMs / 1000
//     return jwt.sign({ key }, secret, { expiresIn: expirationInSeconds })
//   },
//   async validate ({ secret, token }: TokenValidator): Promise<Output> {
//     const payload = jwt.verify(token, secret) as JwtPayload
//     return payload.key
//   }
// };
