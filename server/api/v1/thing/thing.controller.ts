import { Thing } from './thing.model';
import { BaseController } from '../helpers/base-endpoint';


export class ThingController extends BaseController {
  constructor() {
    super(Thing);
  }
}
