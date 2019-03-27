import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';


export function matchOtherValidator(otherControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const otherControl: AbstractControl = control.root.get(otherControlName);

    if (otherControl) {
      const subscription: Subscription = otherControl
        .valueChanges
        .subscribe(() => {
          control.updateValueAndValidity();
          subscription.unsubscribe();
        });
    }

    return (otherControl && control.value !== otherControl.value) ? {match: true} : null;
  };
}
