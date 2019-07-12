import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerConfigFormComponent } from './datepicker-config-form.component';

describe('DatepickerConfigFormComponent', () => {
  let component: DatepickerConfigFormComponent;
  let fixture: ComponentFixture<DatepickerConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerConfigFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
