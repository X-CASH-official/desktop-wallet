import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmSelectComponent } from './frm-select.component';

describe('FrmSelectComponent', () => {
  let component: FrmSelectComponent;
  let fixture: ComponentFixture<FrmSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
