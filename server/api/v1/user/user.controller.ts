import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
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
  public register = (req: Request, res: Response): void => {
    const newUser: Document = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    newUser
      .save()
      .then((user: IUser) => {
        new ResponseService(res)
          .success(null, 201);
      })
      .catch(err => {
        if (err && err.code && err.code === 11000) {
          new ResponseService(res)
            .error(ErrorCodes.USER_ALREADY_EXIST);
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
   */
  public login = (req: Request, res: Response): void => {
    User
      .findOne({
        email: req.body.email
      })
      .select('+password')
      .then((user: IUser) => {

        if (!user) {
          new ResponseService(res)
            .error(ErrorCodes.USER_NOT_FOUND);
          return;
        }

        user.comparePassword(req.body.password, function (compareErr, same) {
          if (same && !compareErr) {
            const userData = JSON.parse(JSON.stringify(user));
            delete userData.password;

            const token = jwt.sign(userData, process.env.SECRET, {expiresIn: '7 days'});

            new ResponseService(res)
              .success({
                user: userData,
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

  /**
   * Check user authorization
   * @param req
   * @param res
   */
  public check = (req: Request, res: Response): void => {
    if (req.headers.authorization) {
      const decoded = jwt.verify(req.headers.authorization.replace('JWT ', ''), process.env.SECRET);

      User
        .findById((decoded as IUser)._id)
        .then((user: IUser) => {
          new ResponseService(res)
            .success({
              user: user,
              token: req.headers.authorization
            });
        })
        .catch(() => {
          new ResponseService(res)
            .error(ErrorCodes.UNAUTHORIZED);
        });

    } else {
      new ResponseService(res)
        .error(ErrorCodes.UNAUTHORIZED);
    }
  };
}

