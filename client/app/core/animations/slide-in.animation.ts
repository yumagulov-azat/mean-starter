import { animate, style, transition, trigger } from '@angular/animations';


export const SlideInAnimation = trigger(
  'slideIn', [
    transition(':enter', [
      style({transform: 'translateY(-20px)', opacity: 0}),
      animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0)', opacity: 1}),
      animate('200ms', style({transform: 'translateY(-20px)', opacity: 0}))
    ])
  ]
)
