import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { RoutesConfig } from './config/routes.config';
import { DBConfig } from './config/db.config';
import Routes from './api/v1/routes';


dotenv.load({path: '.env'});
const app: express.Application = express();

RoutesConfig.init(app);
Routes.init(app);
DBConfig.init();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (!module.parent) {
  app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}`));
}

export { app };
