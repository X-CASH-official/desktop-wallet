import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmAdvanceComponent } from './frm-advance.component';

describe('FrmAdvanceComponent', () => {
  let component: FrmAdvanceComponent;
  let fixture: ComponentFixture<FrmAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
