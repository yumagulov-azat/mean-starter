import { UserController } from '../user/user.controller';
import { BaseController } from '../helpers/base/base.controller';


export class AuthController extends BaseController {
  private userCtrl: UserController = new UserController;
  public login = this.userCtrl.login;
  public register = this.userCtrl.register;
}
