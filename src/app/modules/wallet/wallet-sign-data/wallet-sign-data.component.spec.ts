import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSignDataComponent } from './wallet-sign-data.component';

describe('WalletSignDataComponent', () => {
  let component: WalletSignDataComponent;
  let fixture: ComponentFixture<WalletSignDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletSignDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletSignDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
