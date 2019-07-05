import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMapFormComponent } from './auth-map-form.component';

describe('AuthMapFormComponent', () => {
  let component: AuthMapFormComponent;
  let fixture: ComponentFixture<AuthMapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
