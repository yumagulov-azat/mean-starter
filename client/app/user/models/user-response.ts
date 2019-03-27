import { ApiResponse } from '@app/core/api/api-response.model';


export interface UserResponse extends ApiResponse {
  email: string;
  name: string;
}
