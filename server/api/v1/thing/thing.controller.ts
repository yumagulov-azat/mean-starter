import BaseController from '../helpers/base.controller';
import Thing from './thing.model';

export default class ThingController extends BaseController {
  model = Thing;
}
