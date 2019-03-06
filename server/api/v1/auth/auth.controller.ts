import { UserController } from '../user/user.controller';


const UserCtrl = new UserController;

export class AuthController {
  public login = UserCtrl.login;
  public register = UserCtrl.register;
}
