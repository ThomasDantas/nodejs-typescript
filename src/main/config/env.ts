export const env = {
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.SECRET ?? 'secret',
  expireIn: process.env.EXPIREIN ?? '12h'
}
