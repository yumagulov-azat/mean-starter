import * as express from 'express';
import { AuthController } from './auth.controller';
import { IBaseRoute } from '../helpers/base/base.route';
import { AuthValidation } from './auth.validation';

export class AuthRoute implements IBaseRoute {

  private expressRouter: express.Router = express.Router();
  private controller: AuthController = new AuthController();
  private validation: AuthValidation = new AuthValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/login')
      .post(this.validation.login, this.controller.login);

    this.expressRouter
      .route('/registration')
      .post(this.validation.registration, this.controller.register);

    return this.expressRouter;
  }
}
