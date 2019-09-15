import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { change_passwordComponent } from './change_password.component';

describe('change_passwordComponent', () => {
  let component: change_passwordComponent;
  let fixture: ComponentFixture<change_passwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ change_passwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(change_passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
