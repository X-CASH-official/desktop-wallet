import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSendModalComponent } from './wallet-send-modal.component';

describe('WalletSendModalComponent', () => {
  let component: WalletSendModalComponent;
  let fixture: ComponentFixture<WalletSendModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletSendModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletSendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
