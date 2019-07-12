import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCryptoComponent } from './dash-crypto.component';

describe('DashCryptoComponent', () => {
  let component: DashCryptoComponent;
  let fixture: ComponentFixture<DashCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
