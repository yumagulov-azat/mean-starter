import * as express from 'express';
import { UserRoute } from './user/user.route';
import { ThingRoute } from './thing/thing.route';
import { AuthRoute } from './auth/auth.route';


export class ApiRoutes {
  static init(app: express.Application) {
    const apiBaseUrl: string = '/api/v1';

    app.use(`${apiBaseUrl}/auth`, new AuthRoute().router);
    app.use(`${apiBaseUrl}/users`, new UserRoute().router);
    app.use(`${apiBaseUrl}/things`, new ThingRoute().router);
  }
}
