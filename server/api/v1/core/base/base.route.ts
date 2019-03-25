import * as express from 'express';
import { BaseController } from './base.controller';
import { BaseValidation } from './base.validation';

export interface IBaseRoute {
  expressRouter: express.Router;
  controller: BaseController | any;
  validation?: BaseValidation;
  router: express.Router;
}
