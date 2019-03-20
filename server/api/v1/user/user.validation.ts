import * as joi from 'joi';
import { BaseValidation } from '../core/base-endpoint';
import { ObjectSchema } from 'joi';


export class UserValidation extends BaseValidation {
  public update = (req, res, next): void => {
    const schema: ObjectSchema = joi.object({
      name: joi.string(),
      email: joi.string().email().required(),
      password: joi.string().min(8)
    });

    this.validate(req.body, res, next, schema);
  };
}
