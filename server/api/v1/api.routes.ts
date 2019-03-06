import * as express from 'express';
import { ThingRouter} from './thing/thing.route';
import { UserRouter } from './user/user.route';
import { AuthRouter } from './auth/auth.route';


export class ApiRoutes {
  static init(app: express.Application) {
    const apiBaseUrl: string = '/api/v1';

    app.use(`${apiBaseUrl}/auth`, AuthRouter);
    app.use(`${apiBaseUrl}/users`, UserRouter);
    app.use(`${apiBaseUrl}/things`, ThingRouter);
  }
}
