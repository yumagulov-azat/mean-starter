import { User } from './auth-reponse.model';


export interface AuthStatus {
  isAuthenticated: boolean;
  user: User | null;
}


export const defaultAuthStatus: AuthStatus = {
  isAuthenticated: false,
  user: null
};
