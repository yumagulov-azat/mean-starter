import { Thing } from './thing.model';
import { BaseController } from '../core/base';


export class ThingController extends BaseController {
  constructor() {
    super(Thing);
  }
}
