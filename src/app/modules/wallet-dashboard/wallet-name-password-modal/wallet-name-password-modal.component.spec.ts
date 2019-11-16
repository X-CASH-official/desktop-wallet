import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletNamePasswordModalComponent } from './wallet-name-password-modal.component';

describe('WalletNamePasswordModalComponent', () => {
  let component: WalletNamePasswordModalComponent;
  let fixture: ComponentFixture<WalletNamePasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletNamePasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletNamePasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
