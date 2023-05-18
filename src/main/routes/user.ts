import { adaptExpressRoute as adapt } from '@/main/adpaters'
import { UserController } from '@/application/controllers/user';
import { auth } from '@/main/middlewares'

import { Router } from 'express';

const controller = new UserController()

export default (router: Router): void => {
  router.get('/users', adapt(controller.get))
  router.post('/users', auth, adapt(controller.create))
}

