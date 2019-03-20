import * as joi from 'joi';
import { BaseValidation } from '../helpers/base/base.validation';
import { ObjectSchema } from 'joi';


export class ThingValidation extends BaseValidation {

  public save = (req, res, next): void => {
    const schema: ObjectSchema = joi.object({
      name: joi.string().required()
    });

    this.validate(req.body, res, next, schema);
  }
}
