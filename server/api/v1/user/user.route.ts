import * as express from 'express';
import { IBaseRoute } from '../helpers/base/base.route';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

export class UserRoute implements IBaseRoute {

  private expressRouter: express.Router = express.Router();
  private controller: UserController = new UserController();
  private validation: UserValidation = new UserValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/')
      .get(
        this.controller.getAll
      );

    this.expressRouter
      .route('/:id')
      .get(
        this.controller.getById
      )
      .put(
        this.validation.update,
        this.controller.updateById
      )
      .delete(
        this.controller.deleteById
      );

    return this.expressRouter;
  }
}
