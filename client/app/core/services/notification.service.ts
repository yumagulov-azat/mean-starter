import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  public show(message: string): void {
    if (message) {
      this.snackBar.open(message, 'OK', {
        verticalPosition: 'top',
        duration: 3000
      });
    }
  }
}
