import * as express from 'express';
import * as passport from 'passport';
import { ThingController } from './thing.controller';
import { IBaseRoute } from '../core/base-endpoint';
import { ThingValidation } from './thing.validation';
import { ResponseErrorType, ResponseService } from '../core/response-service';


const requireAuthenticate = function (req, res, next) {
  passport.authenticate('jwt', {session: false}, function (err, user, info) {
    let errorMessage: string;
    let errorDetails: string;

    if (info) {
      errorMessage = info.message;
      errorDetails = info.name;
    }

    if (!user) {
      new ResponseService(res)
        .status(401)
        .error(errorMessage || 'Authentication failed', errorDetails || null, ResponseErrorType.AUTHORIZATION_ERROR);
      return;
    }
    next();
  })(req, res, next);
};


export class ThingRoute implements IBaseRoute {

  private expressRouter: express.Router = express.Router();
  private controller: ThingController = new ThingController();
  private validation: ThingValidation = new ThingValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/')
      .get(
        requireAuthenticate,
        this.controller.getAll
      )
      .post(
        passport.authenticate('jwt', {session: false}),
        this.validation.save,
        this.controller.save
      );

    this.expressRouter
      .route('/:id')
      .get(
        passport.authenticate('jwt', {session: false}),
        this.controller.getById
      )
      .put(
        passport.authenticate('jwt', {session: false}),
        this.validation.save,
        this.controller.updateById
      )
      .delete(
        passport.authenticate('jwt', {session: false}),
        this.controller.deleteById
      );

    return this.expressRouter;
  }
}

