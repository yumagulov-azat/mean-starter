import { ApiResponse } from '@app/core/api/api-response.model';

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthResponseData {
  user: User;
  token: string;
}

export interface AuthResponse extends ApiResponse {
  data: AuthResponseData;
}

export type authError = 'UNAUTHORIZED' | 'USER_NOT_FOUND' | 'USER_ALREADY_EXIST' | 'WRONG_PASSWORD';
