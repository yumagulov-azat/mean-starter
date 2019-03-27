import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SlideInAnimation } from '@app/core/animations/slide-in.animation';


@Component({
  selector: 'app-user-auth-form-wrapper',
  templateUrl: './user-auth-form-wrapper.component.html',
  styleUrls: ['./user-auth-form-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [SlideInAnimation],
})
export class UserAuthFormWrapperComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
