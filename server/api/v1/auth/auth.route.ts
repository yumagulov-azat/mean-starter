import * as express from 'express';
import { AuthController } from './auth.controller';
import { IBaseRoute } from '../core/base';
import { AuthValidation } from './auth.validation';


export class AuthRoute implements IBaseRoute {

  expressRouter: express.Router = express.Router();
  controller: AuthController = new AuthController();
  validation: AuthValidation = new AuthValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/login')
      .post(
        this.validation.login,
        this.controller.login
      );

    this.expressRouter
      .route('/registration')
      .post(
        this.validation.registration,
        this.controller.register
      );

    return this.expressRouter;
  }
}
