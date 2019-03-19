import * as joi from 'joi';
import { BaseValidation } from '../helpers/base/base.validation';


export class ThingValidation extends BaseValidation {

  public save = (req, res, next) => {
    const schema = joi.object({
      name: joi.string().required()
    });

    this.validate(req.body, res, next, schema);
  }
}
