import { UserController } from '../user/user.controller';
import { RequestHandler } from 'express';


export class AuthController {
  private userCtrl: UserController = new UserController;
  public login: RequestHandler = this.userCtrl.login;
  public register: RequestHandler = this.userCtrl.register;
}
