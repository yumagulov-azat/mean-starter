import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthFormWrapperComponent } from './user-auth-form-wrapper.component';

describe('UserAuthFormWrapperComponent', () => {
  let component: UserAuthFormWrapperComponent;
  let fixture: ComponentFixture<UserAuthFormWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthFormWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
