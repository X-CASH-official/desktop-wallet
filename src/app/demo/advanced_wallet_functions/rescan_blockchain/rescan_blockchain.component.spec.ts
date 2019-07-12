import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rescan_blockchainComponent } from './rescan_blockchain.component';

describe('rescan_blockchainComponent', () => {
  let component: rescan_blockchainComponent;
  let fixture: ComponentFixture<rescan_blockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rescan_blockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rescan_blockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
