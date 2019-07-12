import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDatepickerComponent } from './adv-datepicker.component';

describe('AdvDatepickerComponent', () => {
  let component: AdvDatepickerComponent;
  let fixture: ComponentFixture<AdvDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
