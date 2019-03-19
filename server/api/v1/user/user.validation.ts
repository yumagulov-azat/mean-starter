import * as joi from 'joi';
import { BaseValidation } from '../helpers/base/base.validation';


export class UserValidation extends BaseValidation {
  public update = (req, res, next) => {
    const schema = joi.object({
      name: joi.string(),
      email: joi.string().email().required(),
      password: joi.string().min(8)
    });

    this.validate(req.body, res, next, schema);
  };
}
