import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';


export class ExpressConfig {

  static init(app: express.Application): void {
    app.set('port', (process.env.PORT || 3000));

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(helmet());
    app.use('/', express.static(path.join(__dirname, '../client')));
  }
}
