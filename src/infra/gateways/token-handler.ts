import jwt, { JwtPayload } from 'jsonwebtoken'

export type TokenGenerator = {
  secret?: string,
  key: string
  expirationInHour: string
}
export type TokenValidator = { secret?: string, token: string }

export type Output = string

export class JwtTokenHandler {
  constructor (
    private readonly secret: string
  ) { }

  async generate ({ expirationInHour, key }: TokenGenerator): Promise<Output> {
    const expirationInSeconds = expirationInHour
    return jwt.sign({ key }, this.secret, { expiresIn: expirationInSeconds })
  }

  async validate ({ token }: TokenValidator): Promise<Output> {
    const payload = jwt.verify(token, this.secret) as JwtPayload
    return payload.key
  }
}