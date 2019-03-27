import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Thing } from '@app/things/models/thing.model';
import { SlideInAnimation } from '@app/core/animations/slide-in.animation';

@Component({
  selector: 'app-things-list-item',
  templateUrl: './things-list-item.component.html',
  styleUrls: ['./things-list-item.component.scss'],
  animations: [SlideInAnimation],
})
export class ThingsListItemComponent implements OnInit {

  @Input() thing: Thing;
  @Output() deleteThing: EventEmitter<Thing> = new EventEmitter<Thing>();

  constructor() { }

  ngOnInit() {
  }

  public emitDeleteThing(): void {
    this.deleteThing.emit(this.thing);
  }

}
