import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService
  ) {
    this.authService.login('test@1123test.ru2', '12345678')
      .subscribe((res) => console.log(res), (err) => console.log(err))
  }
}

