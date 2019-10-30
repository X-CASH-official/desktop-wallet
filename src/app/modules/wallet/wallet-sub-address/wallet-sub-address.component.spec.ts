import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSubAddressComponent } from './wallet-sub-address.component';

describe('WalletSubAddressComponent', () => {
  let component: WalletSubAddressComponent;
  let fixture: ComponentFixture<WalletSubAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletSubAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletSubAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
