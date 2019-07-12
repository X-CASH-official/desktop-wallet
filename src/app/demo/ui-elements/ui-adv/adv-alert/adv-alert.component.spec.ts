import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvAlertComponent } from './adv-alert.component';

describe('AdvAlertComponent', () => {
  let component: AdvAlertComponent;
  let fixture: ComponentFixture<AdvAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
