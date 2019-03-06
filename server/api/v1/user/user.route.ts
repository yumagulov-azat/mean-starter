import * as express from 'express';
import { UserController } from './user.controller';


const UserCtrl = new UserController;
const UserRouter: express.Router = express.Router();

UserRouter
  .route('/')
  .get(UserCtrl.getAll);

UserRouter
  .route('/:id')
  .get(UserCtrl.getById)
  .put(UserCtrl.updateById)
  .delete(UserCtrl.deleteById);

export { UserRouter };
