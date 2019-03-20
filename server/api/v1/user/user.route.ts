import * as express from 'express';
import { IBaseRoute } from '../core/base-endpoint';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import { requireAuth } from '../core/auth';

export class UserRoute implements IBaseRoute {

  private expressRouter: express.Router = express.Router();
  private controller: UserController = new UserController();
  private validation: UserValidation = new UserValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/')
      .get(
        requireAuth,
        this.controller.getAll
      );

    this.expressRouter
      .route('/:id')
      .get(
        requireAuth,
        this.controller.getById
      )
      .put(
        requireAuth,
        this.validation.update,
        this.controller.updateById
      )
      .delete(
        requireAuth,
        this.controller.deleteById
      );

    return this.expressRouter;
  }
}
