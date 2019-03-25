import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainWraperComponent } from './ui-main-wraper.component';

describe('UiMainWraperComponent', () => {
  let component: UiMainWraperComponent;
  let fixture: ComponentFixture<UiMainWraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiMainWraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMainWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
