import * as express from 'express';
import * as passport from 'passport';
import { ThingController } from './thing.controller';


const ThingCtrl = new ThingController;
const ThingRouter: express.Router = express.Router();


ThingRouter
  .route('/')
  .get(passport.authenticate('jwt', {session: false}), ThingCtrl.getAll)
  .post(passport.authenticate('jwt', {session: false}), ThingCtrl.save);

ThingRouter
  .route('/:id')
  .get(passport.authenticate('jwt', {session: false}), ThingCtrl.getById)
  .put(passport.authenticate('jwt', {session: false}), ThingCtrl.updateById)
  .delete(passport.authenticate('jwt', {session: false}), ThingCtrl.deleteById);

export { ThingRouter };
