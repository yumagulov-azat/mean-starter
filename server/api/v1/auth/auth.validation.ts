import * as joi from 'joi';
import { BaseValidation } from '../helpers/base-endpoint';
import { ObjectSchema } from 'joi';


export class AuthValidation extends BaseValidation {

  public registration = (req, res, next): void => {
    const schema: ObjectSchema = joi.object({
      name: joi.string(),
      email: joi.string().email().required(),
      password: joi.string().min(8).required()
    });

    this.validate(req.body, res, next, schema);
  };

  public login = (req, res, next): void => {
    const schema: ObjectSchema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(8).required()
    });

    this.validate(req.body, res, next, schema);
  };
}
