import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsListItemComponent } from './things-list-item.component';

describe('ThingsListItemComponent', () => {
  let component: ThingsListItemComponent;
  let fixture: ComponentFixture<ThingsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
