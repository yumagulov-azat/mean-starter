import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainHeaderComponent } from './ui-main-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/shared/material/material.module';

describe('UiMainHeaderComponent', () => {
  let component: UiMainHeaderComponent;
  let fixture: ComponentFixture<UiMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterModule,
        MaterialModule
      ],
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
