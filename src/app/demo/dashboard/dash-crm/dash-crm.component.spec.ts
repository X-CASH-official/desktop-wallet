import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCrmComponent } from './dash-crm.component';

describe('DashCrmComponent', () => {
  let component: DashCrmComponent;
  let fixture: ComponentFixture<DashCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
