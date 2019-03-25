import * as jwt from 'jsonwebtoken';
import { BaseController } from '../core/base';
import { User, IUser } from './user.model';
import { Document } from 'mongoose';
import { ResponseService } from '../core/services/response-service';
import { ErrorCodes } from '../core/services/response-service/response-service-error-codes';

export class UserController extends BaseController {

  constructor() {
    super(User);
  }

  /**
   * Create new user
   * @param req
   * @param res
   * @param next
   */
  public register = (req, res): void => {
    const newUser: Document = new User({
      email: req.body.email,
      password: req.body.password
    });

    newUser.save()
      .then((user: IUser) => {
        new ResponseService(res)
          .success(null, 201);
      })
      .catch(err => {
        if (err && err.code === 11000) {
          new ResponseService(res)
            .error(ErrorCodes.USER_ALREADY_EXIST)
          return;
        }
        new ResponseService(res)
          .error(ErrorCodes.COMMON);
      });
  };

  /**
   * Login
   * @param req
   * @param res
   * @param next
   */
  public login = (req, res): void => {
    User.findOne({
      email: req.body.email
    })
      .select('+password')
      .then((user: IUser) => {
        if (!user) {
          new ResponseService(res)
            .error(ErrorCodes.USER_NOT_FOUND)
          return;
        }

        user.comparePassword(req.body.password, function (compareErr, isMatch) {
          if (isMatch && !compareErr) {
            const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: '7 days' });
            new ResponseService(res)
              .success({
                user: user,
                token: `JWT ${token}`
              }, 200);
          } else {
            new ResponseService(res)
              .error(ErrorCodes.WRONG_PASSWORD);
          }
        });
      })
      .catch(err => {
        throw err;
      });
  };
}

