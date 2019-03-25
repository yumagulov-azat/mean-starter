import { ApiResponse } from '../../models/api-response.model';

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthResponseUserData {
  user: User;
  token: string;
}

export interface AuthResponse extends ApiResponse {
  data: AuthResponseUserData;
}

export type authError = 'UNAUTHORIZED_ERROR' | 'USER_NOT_FOUND_ERROR' | 'USER_ALREADY_EXIST_ERROR' | 'WRONG_PASSWORD_ERROR';
