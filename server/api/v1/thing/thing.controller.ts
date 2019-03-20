import { Thing } from './thing.model';
import { BaseController } from '../core/base-endpoint';


export class ThingController extends BaseController {
  constructor() {
    super(Thing);
  }
}
