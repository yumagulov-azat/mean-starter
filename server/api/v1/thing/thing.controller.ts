import { BaseController } from '../helpers/base.controller';
import { Thing, IThing } from './thing.model';

export class ThingController extends BaseController {
  model = Thing;
}
