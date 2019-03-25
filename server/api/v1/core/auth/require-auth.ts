import * as passport from 'passport';
import { ResponseService } from '../services/response-service';
import { ErrorCodes } from '../services/response-service/response-service-error-codes';
import { Request, Response, NextFunction } from 'express';


export function requireAuth(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('jwt', {session: false}, function (err, user) {
    if (!user) {
      new ResponseService(res)
        .error(ErrorCodes.UNAUTHORIZED);
      return;
    }
    next();
  })(req, res, next);
};
