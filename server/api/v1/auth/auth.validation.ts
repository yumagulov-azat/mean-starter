import * as joi from 'joi';
import { BaseValidation } from '../core/base-endpoint';
import { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';


export class AuthValidation extends BaseValidation {

  public registration = (req: Request, res: Response, next: NextFunction): void => {
    const schema: ObjectSchema = joi.object({
      name: joi.string(),
      email: joi.string().email().required(),
      password: joi.string().min(8).required()
    });

    this.validate(req.body, res, next, schema);
  };

  public login = (req: Request, res: Response, next: NextFunction): void => {
    const schema: ObjectSchema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(8).required()
    });

    this.validate(req.body, res, next, schema);
  };
}
