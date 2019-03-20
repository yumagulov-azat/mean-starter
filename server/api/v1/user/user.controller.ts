import * as jwt from 'jsonwebtoken';
import { BaseController } from '../core/base-endpoint';
import { User, IUser } from './user.model';
import { Document } from 'mongoose';
import { ResponseErrorType, ResponseService } from '../core/response-service';

export const UserNotFound = 'UserNotFound';

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
          .status(201)
          .success(null);
      })
      .catch(err => {
        if (err && err.code === 11000) {
          new ResponseService(res)
            .status(400)
            .error('User already exists', 'UserAlreadyExists', ResponseErrorType.AUTHORIZATION_ERROR)
          return;
        }
        new ResponseService(res)
          .status(400)
          .error();
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
            .status(401)
            .error('Authentication failed. User not found', 'UserNotFound', ResponseErrorType.AUTHORIZATION_ERROR)
          return;
        }

        user.comparePassword(req.body.password, function (compareErr, isMatch) {
          if (isMatch && !compareErr) {
            const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: '7 days' });
            new ResponseService(res)
              .status(200)
              .success({ token: 'JWT ' + token });
          } else {
            new ResponseService(res)
              .status(401)
              .error('Authentication failed. Wrong password', 'WrongPassword', ResponseErrorType.AUTHORIZATION_ERROR);
          }
        });
      })
      .catch(err => {
        throw err;
      });
  };
}

