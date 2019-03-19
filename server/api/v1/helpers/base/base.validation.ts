import * as joi from 'joi';
import { BaseError } from '../base.error';


export class BaseValidation {

  public validate = (req, res, next, schema) => {
    joi.validate(req, schema)
      .then(() => next())
      .catch((err) => {
        res.status(400).json(BaseError.generate(false, err));
      });
  }
}
