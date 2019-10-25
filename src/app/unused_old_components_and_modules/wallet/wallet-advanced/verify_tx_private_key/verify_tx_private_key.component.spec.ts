import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { verify_tx_private_keyComponent } from './verify_tx_private_key.component';

describe('verify_tx_private_keyComponent', () => {
  let component: verify_tx_private_keyComponent;
  let fixture: ComponentFixture<verify_tx_private_keyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ verify_tx_private_keyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(verify_tx_private_keyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
