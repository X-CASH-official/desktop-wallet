import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletStakingComponent } from './wallet-staking.component';

describe('WalletAddressesComponent', () => {
  let component: WalletStakingComponent;
  let fixture: ComponentFixture<WalletStakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletStakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletStakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
