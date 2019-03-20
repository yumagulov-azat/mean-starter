import * as express from 'express';
import { ThingController } from './thing.controller';
import { IBaseRoute } from '../core/base-endpoint';
import { ThingValidation } from './thing.validation';
import { requireAuth } from '../core/auth';





export class ThingRoute implements IBaseRoute {

  private expressRouter: express.Router = express.Router();
  private controller: ThingController = new ThingController();
  private validation: ThingValidation = new ThingValidation();

  public get router(): express.Router {
    this.expressRouter
      .route('/')
      .get(
        requireAuth,
        this.controller.getAll
      )
      .post(
        requireAuth,
        this.validation.save,
        this.controller.save
      );

    this.expressRouter
      .route('/:id')
      .get(
        requireAuth,
        this.controller.getById
      )
      .put(
        requireAuth,
        this.validation.save,
        this.controller.updateById
      )
      .delete(
        requireAuth,
        this.controller.deleteById
      );

    return this.expressRouter;
  }
}

