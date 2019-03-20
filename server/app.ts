import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Request, Response } from 'express';

import { ExpressConfig } from './config/express.config';
import { DBConfig } from './config/db.config';
import { ApiRoutes } from './api/v1/api.routes';
import { PassportConfig } from './config/passport.config';


dotenv.load({path: '.env'});
const app: express.Application = express();

DBConfig.init();
ExpressConfig.init(app);
PassportConfig.init(app);
ApiRoutes.init(app);

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

if (!module.parent) {
  app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}`));
}

export { app };
