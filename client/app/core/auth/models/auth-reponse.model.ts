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

export type authError = 'UNAUTHORIZED_ERROR' | 'USER_NOT_FOUND_ERROR' | 'USER_ALREADY_EXIST_ERROR' | 'WRONG_PASSWORD_ERROR';
