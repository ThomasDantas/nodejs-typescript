import jwt, { JwtPayload } from 'jsonwebtoken'

export type TokenGenerator = {
  key: string
}
export type TokenValidator = { secret?: string, token: string }

export type Output = string

export class JwtTokenHandler {
  private readonly secret: string
  private readonly expirationInHour: string

  constructor ({ secret, expirationInHour }: { secret: string, expirationInHour: string }) {
    this.secret = secret
    this.expirationInHour = expirationInHour
  }

  async generate ({ key }: TokenGenerator): Promise<Output> {
    return jwt.sign({ key }, this.secret, { expiresIn: this.expirationInHour })
  }

  async validate ({ token }: TokenValidator): Promise<Output> {
    const payload = jwt.verify(token, this.secret) as JwtPayload
    return payload.key
  }
}