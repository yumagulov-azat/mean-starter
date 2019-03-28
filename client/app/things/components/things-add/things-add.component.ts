import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThingRequest } from '@app/things/models/thing-request.model';


@Component({
  selector: 'app-things-add',
  templateUrl: './things-add.component.html',
  styleUrls: ['./things-add.component.scss']
})
export class ThingsAddComponent implements OnInit {

  @Output() addThing: EventEmitter<ThingRequest> = new EventEmitter<ThingRequest>();
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  public emitAddThing(): void {
    if (this.form.status === 'VALID') {
      this.addThing.emit(this.form.value as ThingRequest);
      this.form.reset();
    }
  }

}
