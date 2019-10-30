import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletIntegratedAddressComponent } from './wallet-integrated-address.component';

describe('WalletAddressesComponent', () => {
  let component: WalletIntegratedAddressComponent;
  let fixture: ComponentFixture<WalletIntegratedAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletIntegratedAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletIntegratedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
