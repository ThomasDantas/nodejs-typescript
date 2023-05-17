import { adaptExpressMiddleware } from '@/main/adpaters'
import { makeAuthenticationMiddleware } from '@/main/composition'

export const auth = adaptExpressMiddleware(makeAuthenticationMiddleware())
