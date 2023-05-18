import { adaptExpressRoute as adapt } from '@/main/adpaters'
import { expressMiddleware as auth } from '@/main/middlewares'
import { CreateUserRouterComposer, GetUserRouterComposer } from '@/main/composers/users';
import { AuthUserMiddleware } from '@/main/composers/jwt'

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/users', adapt(CreateUserRouterComposer.compose()))
  router.get('/users', auth(AuthUserMiddleware.compose()), adapt(GetUserRouterComposer.compose()))
}

