import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { get_tx_private_keyComponent } from './get_tx_private_key.component';

describe('get_tx_private_keyComponent', () => {
  let component: get_tx_private_keyComponent;
  let fixture: ComponentFixture<get_tx_private_keyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ get_tx_private_keyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(get_tx_private_keyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
