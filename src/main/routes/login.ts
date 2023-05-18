import { adaptExpressRoute as adapt } from '@/main/adpaters'
import { expressMiddleware as auth } from '@/main/middlewares'
import { LoginRouterComposer } from '@/main/composers/login';
import { AuthUserMiddleware } from '@/main/composers/jwt'

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/login', auth(AuthUserMiddleware.compose()), adapt(LoginRouterComposer.compose()))
}

