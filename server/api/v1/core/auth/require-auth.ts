import * as passport from 'passport';
import { ResponseErrorType, ResponseService } from '../response-service';


export function requireAuth(req, res, next) {
  passport.authenticate('jwt', {session: false}, function (err, user, info) {
    let errorMessage: string;
    let errorDetails: string;

    if (info) {
      errorMessage = info.message;
      errorDetails = info.name;
    }

    if (!user) {
      new ResponseService(res)
        .status(401)
        .error(errorMessage || 'Authentication failed', errorDetails || null, ResponseErrorType.AUTHORIZATION_ERROR);
      return;
    }
    next();
  })(req, res, next);
};
