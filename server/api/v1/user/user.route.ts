import * as express from 'express';
import { IBaseRoute } from '../core/base';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import { requireAuth } from '../core/auth';

export class UserRoute implements IBaseRoute {

   expressRouter: express.Router = express.Router();
  controller: UserController = new UserController();
  validation: UserValidation = new UserValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/')
      .get(
        requireAuth,
        this.controller.getAll
      );

    this.expressRouter
      .route('/:id')
      .put(
        requireAuth,
        this.validation.update,
        this.controller.updateById
      )
      .get(
        requireAuth,
        this.controller.getById
      )
      .delete(
        requireAuth,
        this.controller.deleteById
      );

    return this.expressRouter;
  }
}
