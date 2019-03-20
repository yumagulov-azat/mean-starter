import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ResponseErrorType, ResponseService } from '../response.service';
import { ObjectSchema, ValidationError } from 'joi';


export class BaseValidation {

  /**
   * Joi validation
   * @param req
   * @param res
   * @param next
   * @param schema
   * @param errMessage
   */
  public validate = (
    req: Request,
    res: Response,
    next: NextFunction,
    schema: ObjectSchema,
    errMessage?: string = 'Validation error'
  ): void => {

    joi
      .validate(req, schema)
      .then(() => next())
      .catch((err: ValidationError) => {
        new ResponseService(res)
          .status(400)
          .error(errMessage, err.details, ResponseErrorType.VALIDATION);
      });
  };
}
