import * as express from 'express';
import * as passport from 'passport';
import { ThingController } from './thing.controller';
import { IBaseRoute } from '../helpers/base-endpoint';
import { ThingValidation } from './thing.validation';

export class ThingRoute implements IBaseRoute {

  private expressRouter: express.Router = express.Router();
  private controller: ThingController = new ThingController();
  private validation: ThingValidation = new ThingValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/')
      .get(
        passport.authenticate('jwt', {session: false}),
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
