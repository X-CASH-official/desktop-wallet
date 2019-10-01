import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletHomepageComponent } from './wallet-homepage.component';

describe('WalletMainMenuComponent', () => {
  let component: WalletHomepageComponent;
  let fixture: ComponentFixture<WalletHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
