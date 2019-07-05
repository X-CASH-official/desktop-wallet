import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmPickerComponent } from './frm-picker.component';

describe('FrmPickerComponent', () => {
  let component: FrmPickerComponent;
  let fixture: ComponentFixture<FrmPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
