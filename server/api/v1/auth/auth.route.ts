import * as express from 'express';
import { AuthController } from './auth.controller';


const AuthCtrl = new AuthController();
const AuthRouter: express.Router = express.Router();

AuthRouter
  .route('/login')
  .post(AuthCtrl.login);

AuthRouter
  .route('/registration')
  .post(AuthCtrl.register);

export { AuthRouter };
