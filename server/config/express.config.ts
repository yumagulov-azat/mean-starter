import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as compression from 'compression';


class ExpressConfig {

  private static _instance: ExpressConfig;

  private constructor() {
  }

  static get instance(): ExpressConfig {
    if (!this._instance) {
      this._instance = new ExpressConfig();
    }

    return this._instance;
  }

  init(app: express.Application): void {
    app.set('port', (process.env.PORT || 3000));

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(helmet());
    app.use(compression());
    app.use('/', express.static(path.join(__dirname, '../client')));
  }
}


const ExpressConfigInstance = ExpressConfig.instance;

export { ExpressConfigInstance as ExpressConfig };
