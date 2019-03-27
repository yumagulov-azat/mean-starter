import * as jwt from 'jsonwebtoken';
import { RequestHandler, Request, Response } from 'express';
import { UserController } from '../user/user.controller';
import { ResponseService } from '../core/services/response-service';
import { BaseController } from '../core/base';
import { User } from '../user/user.model';


export class AuthController {
  private userCtrl: UserController = new UserController;
  public login: RequestHandler = this.userCtrl.login;
  public register: RequestHandler = this.userCtrl.register;
  public check: RequestHandler = this.userCtrl.check;


  // public check: RequestHandler = (req: Request, res: Response): void => {
  //   new ResponseService(res)
  //     .success(null);
  // };
}
