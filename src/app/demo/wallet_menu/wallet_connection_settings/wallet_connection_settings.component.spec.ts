import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { wallet_connection_settingsComponent } from './wallet_connection_settings.component';

describe('wallet_connection_settingsComponent', () => {
  let component: wallet_connection_settingsComponent;
  let fixture: ComponentFixture<wallet_connection_settingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ wallet_connection_settingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(wallet_connection_settingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
