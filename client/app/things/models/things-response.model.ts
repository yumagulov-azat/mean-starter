import { ApiResponse } from '@app/core/api/api-response.model';
import { Thing } from '@app/things/models/thing.model';


export interface ThingsResponse extends ApiResponse {
  data: Thing[];
}
