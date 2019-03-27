import { Component, OnInit } from '@angular/core';
import { Thing } from '@app/things/models/thing.model';
import { ThingsService } from '@app/things/services/things.service';
import { ThingsResponse } from '@app/things/models/things-response.model';
import { SlideInAnimation } from '@app/core/animations/slide-in.animation';
import { NotificationService } from '@app/core/services/notification.service';
import { switchMap } from 'rxjs/operators';
import { ThingRequest } from '@app/things/models/thing-request.model';

@Component({
  selector: 'app-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss'],
  animations: [SlideInAnimation],
})
export class ThingsListComponent implements OnInit {

  public things: Thing[];

  constructor(
    private thingsService: ThingsService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getThings();
  }

  public getThings(): void {
    this.thingsService.getThings()
      .subscribe((res: ThingsResponse) => {
        this.things = res.data;
      });
  }

  public trackByFn(index, item) {
    return item._id;
  }

  public addThing(thingRequest: ThingRequest): void {
    this.thingsService
      .addThing(thingRequest)
      .pipe(
        switchMap(() => this.thingsService.getThings())
      )
      .subscribe(
        (res: ThingsResponse) => {
          this.things = res.data;
        },
        err => this.notificationService.show(`Error when add thing`)
      );
  }

  public deleteThing(thing: Thing): void {
    this.thingsService
      .deleteThing(thing._id)
      .pipe(
        switchMap(() => this.thingsService.getThings())
      )
      .subscribe(
        (res: ThingsResponse) => {
          this.notificationService.show(`Thing «${thing.name}» deleted`)
          this.things = res.data;
        },
        err => this.notificationService.show(`Error when deleting thing`)
      );
  }

}
