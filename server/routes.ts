import * as express from 'express';

// Controllers
import BookCtrl from './controllers/book';

export default class Routes {
  private app: any;
  private router: any = express.Router();

  constructor(app: any) {
    this.app = app;
    this.setRoutes();
    this.useRoutes();
  }

  private setRoutes(): void {
    const bokCtrl = new BookCtrl();

    /**
     * Book routes
     */
    this.router.route('/books').get(bokCtrl.getAll);
    this.router.route('/book').post(bokCtrl.insert);
    this.router.route('/book/:id').get(bokCtrl.get);
    this.router.route('/book/:id').put(bokCtrl.update);
    this.router.route('/book/:id').delete(bokCtrl.delete);
  }

  private useRoutes(): void {
    this.app.use('/api', this.router);
  }
}
