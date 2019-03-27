import { User } from '@app/core/auth/models/auth-reponse.model';


export interface AuthStatus {
  isAuthenticated: boolean;
  user?: User;
}


export const defaultAuthStatus: AuthStatus = {
  isAuthenticated: false
};
