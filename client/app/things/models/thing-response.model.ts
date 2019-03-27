import { ApiResponse } from '@app/core/api/api-response.model';
import { Thing } from '@app/things/models/thing.model';


export interface ThingResponse extends ApiResponse {
  data: Thing;
}
