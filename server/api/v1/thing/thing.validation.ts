import * as joi from 'joi';
import { BaseValidation } from '../core/base';
import { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';


export class ThingValidation extends BaseValidation {

  public save = (req: Request, res: Response, next: NextFunction): void => {
    const schema: ObjectSchema = joi.object({
      name: joi.string().required()
    });

    this.validate(req.body, res, next, schema);
  }
}
