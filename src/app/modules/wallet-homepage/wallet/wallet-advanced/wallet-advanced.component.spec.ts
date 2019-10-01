import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAdvancedComponent } from './wallet-advanced.component';

describe('WalletAdvancedComponent', () => {
  let component: WalletAdvancedComponent;
  let fixture: ComponentFixture<WalletAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
