import * as express from 'express';

import ThingController from './thing.controller';
const thingCtrl = new ThingController;

export class ThingRoutes {

  static init(app: express.Application) {
    const router: express.Router = express.Router();

    router
      .route('/')
      .get(thingCtrl.getAll)
      .post(thingCtrl.insert);

    router
      .route('/:id')
      .get(thingCtrl.getById)
      .put(thingCtrl.update)
      .delete(thingCtrl.delete);

    app.use('/api/v1/thing', router);
  }
}
