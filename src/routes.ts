import { Router } from 'express';
import UserController from './controller/userController';

const route = Router();

route.get('/', UserController.index);
route.post('/users/create', UserController.index);

export default route;
