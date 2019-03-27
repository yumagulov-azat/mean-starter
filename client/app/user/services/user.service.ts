import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/core/auth/auth.service';
import { UserResponse } from '@app/user/models/user-response';
import { UserUpdateRequest } from '@app/user/models/user-update-request.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  public getCurrentUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`/users/${this.authService.userId}`);
  }

  public updateCurrentUser(userUpdateRequest: UserUpdateRequest): Observable<UserResponse> {
    return this.http.put<UserResponse>(`/users/${this.authService.userId}`, userUpdateRequest);
  }
}
