import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmValidationComponent } from './frm-validation.component';

describe('FrmValidationComponent', () => {
  let component: FrmValidationComponent;
  let fixture: ComponentFixture<FrmValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
