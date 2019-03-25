import * as joi from 'joi';
import { BaseValidation } from '../core/base';
import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';


export class UserValidation extends BaseValidation {
  public update = (req: Request, res: Response, next: NextFunction): void => {
    const schema: ObjectSchema = joi.object({
      name: joi.string(),
      email: joi.string().email().min(1),
      password: joi.string().min(8)
    });

    this.validate(req.body, res, next, schema);
  };
}
