import * as jwt from 'jsonwebtoken';
import { BaseController } from '../helpers/base.controller';
import { User, IUser } from './user.model';


export class UserController extends BaseController {

  model = User;

  public register = (req, res, next) => {
    if (!req.body.email) {
      res.json({success: false, msg: 'Please pass email'});
      return;
    }

    if (!req.body.password) {
      res.json({success: false, msg: 'Please pass password'});
      return;
    }

    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    newUser.save()
      .then((user: IUser) => {
        res.status(201).json(user);
      })
    .catch(err => {
      if (err && err.code === 11000) {
        res.json({success: false, msg: 'User already exists'});
        return;
      }
      res.json({success: false, msg: 'Error'});
    });
  }

  public login = (req, res, next) => {
    User.findOne({
      email: req.body.email
    })
      .then((user: IUser) => {
        if (!user) {
          res.status(401).send({success: false, msg: 'Authentication failed. User not found'});
          return;
        }

        user.comparePassword(req.body.password, function (compareErr, isMatch) {
          if (isMatch && !compareErr) {
            const token = jwt.sign(user.toJSON(), process.env.SECRET);
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password'});
          }
        });
      })
      .catch(err => {
        throw err;
      });
  }
}

