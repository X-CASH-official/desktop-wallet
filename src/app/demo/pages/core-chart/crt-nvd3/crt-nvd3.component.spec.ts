import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtNvd3Component } from './crt-nvd3.component';

describe('CrtNvd3Component', () => {
  let component: CrtNvd3Component;
  let fixture: ComponentFixture<CrtNvd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtNvd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtNvd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
