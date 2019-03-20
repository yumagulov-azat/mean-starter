import { UserController } from '../user/user.controller';


export class AuthController {
  private userCtrl: UserController = new UserController;
  public login: Function = this.userCtrl.login;
  public register: Function = this.userCtrl.register;
}
