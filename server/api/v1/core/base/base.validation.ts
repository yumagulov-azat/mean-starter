import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ResponseService } from '../services/response-service';
import { ObjectSchema, ValidationError } from 'joi';
import { ErrorCodes } from '../services/response-service/response-service-error-codes';


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
  ): void => {

    joi
      .validate(req, schema)
      .then(() => next())
      .catch((err: ValidationError) => {
        new ResponseService(res)
          .error({
            ...ErrorCodes.VALIDATION,
            details: err.details
          });
      });
  };
}
