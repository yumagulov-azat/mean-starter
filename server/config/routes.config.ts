import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';


export class RoutesConfig {

  static init(app: express.Application): void {

    app.set('port', (process.env.PORT || 3000));

    app.use('/', express.static(path.join(__dirname, '../public')));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(morgan('dev'));
  }
}
