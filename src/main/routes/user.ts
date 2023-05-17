import { adaptExpressRoute as adapt } from '@/main/adpaters'
import user from '@/application/controllers/user';
import { auth } from '@/main/middlewares'

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/user', adapt(user.get))
  router.post('/user', auth, adapt(user.create))
}

