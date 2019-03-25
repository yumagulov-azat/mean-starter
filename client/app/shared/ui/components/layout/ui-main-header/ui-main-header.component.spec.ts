import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainHeaderComponent } from './ui-main-header.component';

describe('UiMainHeaderComponent', () => {
  let component: UiMainHeaderComponent;
  let fixture: ComponentFixture<UiMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
