import { Thing } from './thing.model';
import { BaseController } from '../helpers/base/base.controller';


export class ThingController extends BaseController {
  constructor() {
    super(Thing);
  }
}
