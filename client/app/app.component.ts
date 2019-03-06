import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public email: string;
  public password: string;

  constructor(private http: HttpClient) {
    this.http.get('/api/v1/things', {
      headers: {
        Authorization: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdlODZmMWJmMjM1MTE2ZjIyNzA3NTAiLCJlbWFpbCI6ImFzZnNkM0BzZGdzM2ZkZ3NkZ3NkZmcucnU0IiwicGFzc3dvcmQiOiIkMmEkMTAkZ0N4TU1Bc1JWUGR1T0NjN2FBQURLZWZaRTZrMVppS3U0ZS95WGZMbUt3Mlc4bkc2WGx4LjYiLCJfX3YiOjAsImlhdCI6MTU1MTgwNDAxNH0.Z-Dbz0VaET_hHIasooo47q0I9pcYRpukc5bVhXcKHc4"

  }
    })
      .subscribe((res2) => {
        console.log(res2);
      });
  }

  public auth(): void {
    this.http.post('/api/v1/auth/login', {
      "email": "asfsd3@sdgs3fdgsdgsdfg.ru4",
      "password": "adfsfgsdhafadsf"
    }, {
      withCredentials: true
    })
      .subscribe((res) => {
        console.log(res);
      });
  }
}

